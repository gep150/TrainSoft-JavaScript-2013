<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once '../config.php';

// Here are some examples

// Print text
// echo "Result returned from ajax<br />";

// Get and use parameters
//$params = $_POST['params'];
//$args = $_POST['args'];
//print_r($params);
//print_r($args);

// Get and return data
//$get_json = mysqli_query($mysql_connection, "SELECT * FROM users;");
//$data_json = mysqli_fetch_array($get_json);

//$json_array = array();
//while($row=mysqli_fetch_assoc($get_json))
//{
//    array_push($json_array, $row);
//}
//print_r(json_encode($json_array));

//echo "Hello world!";

$test = $_POST['test'];
var_dump($test);