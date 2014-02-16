<?php
require "lib/Slim/Slim.php";
require "../database/config.php";
\Slim\Slim::registerAutoLoader();

$app = new \Slim\Slim(array(
    'debug' => true
));

$app->get("/ws/comments/:articleId", function($articleId) use ($app){
    $limit = ($app->request->get('limit')) ? $app->request->get('limit') : 10;
    $offset = ($app->request->get('offset')) ? $app->request->get('offset') : 0;
    $conn = connect();
    $conn->real_query("SELECT count(*) FROM commentaire WHERE id_article='".$articleId."'");
    $resultNbComments = $conn->use_result();
    $nbComments = $resultNbComments->fetch_row()[0];
    $results = array();
    $resultNbComments->close();
    $conn->real_query("SELECT * FROM commentaire WHERE id_article='".$articleId."'  ORDER BY id DESC LIMIT ".$offset.",".$limit);
    $result = $conn->use_result();
    while($obj = $result->fetch_object()){
        $comment = array("id"=>$obj->id,
                         "content"=>$obj->content,
                         "author"=>$obj->author,
                         "date"=>$obj->date,
                         "id_article"=>$obj->id_article);
        array_push($results, $comment);
    }
    echo(json_encode(array("comments" => $results, "nbComments" => $nbComments)));
    $conn->close();
});

$app->put("/ws/comment/:articleId", function($articleId) use($app){
    $data = json_decode($app->request->getBody());
    $today = date("Y-m-d H:i:s");
    $conn = connect();
    $conn->real_query("INSERT INTO commentaire(content, author, date, id_article) VALUES('".$data->{"content"}."', '".$data->{"author"}."','".$today."','".$articleId."')");
    if(strlen($conn->error) == 0)
        echo(json_encode(array("status"=>"ok")));
    else
        echo(json_encode(array("error"=>$conn->error)));
    $conn->close();
});

$app->run();

