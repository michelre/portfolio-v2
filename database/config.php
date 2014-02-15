<?php
    function connect(){
        $SERVER = "localhost";
        $USERNAME = "root";
        $PASSWORD = "";
        $DATABASE = "blog";
        $conn = new mysqli($SERVER, $USERNAME, $PASSWORD, $DATABASE);
        return $conn;
    }