<?php
    function connect(){
        $SERVER = "sql2.cluster1.easy-hebergement.net";
        $USERNAME = "remimichel";
        $PASSWORD = "YS5gioIC";
        $DATABASE = "remimichel";
        $conn = new mysqli($SERVER, $USERNAME, $PASSWORD, $DATABASE);
        return $conn;
    }
