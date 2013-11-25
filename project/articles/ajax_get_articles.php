<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once '../config.php';

echo "<h1>Articles</h1>";

$get_articles_sql = "SELECT article_id, title, description, date FROM articles ORDER BY article_id DESC;";
$get_articles_query = mysqli_query($mysql_connection, $get_articles_sql);

if (mysqli_num_rows($get_articles_query) >= 1) {
	
    while ($get_articles_row = mysqli_fetch_assoc($get_articles_query)) {
        ?>
        <div>
            <h3><?php echo $get_articles_row['title']; ?></h3>
            <p><?php echo $get_articles_row['description']; ?></p>

            <a href="#" onclick="getArticle(<?php echo $get_articles_row['article_id']; ?>)">Read it</a>
        </div>
        <br />
        <hr />
        <br />
        <?php
    }
}
else {
    echo "we don't have any records.";
}

?>