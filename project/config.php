<?php

// Start session
session_start();


// Create connection
$mysql_host = "localhost";
$mysql_username = "root";
$mysql_password = "password";
$mysql_db = "trainsoft";

$mysql_connection = mysqli_connect($mysql_host, $mysql_username, $mysql_password, $mysql_db);

// Check connection
if (mysqli_connect_errno($mysql_connection)) {
  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

?>