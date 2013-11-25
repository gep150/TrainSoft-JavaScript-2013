<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once '../config.php';

$username = $_GET['username'];
$password = $_GET['password'];

$check_user_sql = "SELECT user_id FROM users WHERE username='$username' AND password='$password';";
$check_user_query = mysqli_query($mysql_connection, $check_user_sql);

if (mysqli_num_rows($check_user_query) == 1) {
    $get_user_row = mysqli_fetch_assoc($check_user_query);
    $user_id = $get_user_row['user_id'];

    $_SESSION['user'] = array("id" => $user_id, "username" => $username);
    echo "OK-response-is-valid";
    exit();
}
else {
    echo "ERROR: Wrong input!";
    
}

// EXAMPLE:
//echo "ERROR1: No usernme"
//echo "ERROR2: Wrong password"