<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once '../config.php';

$article_id = $_GET['article_id'];

if (isset($article_id)) {

    $sql_article = "SELECT title, date, author, content FROM articles WHERE article_id='$article_id'";
    $query_article = mysqli_query($mysql_connection, $sql_article);
    $row_query = mysqli_fetch_assoc($query_article);
    
    //print_r($row_query);
    print_r(json_encode($row_query));
    
    /*
    <a href='./index.php'>Go back to feed</a><br />
    <h3><?php echo $row_query['title']; ?></h3>
    <p><?php echo $row_query['content']; ?></p>
     * 
     */

}
else {
    echo "ERROR: Argument article_id is missing";
}
