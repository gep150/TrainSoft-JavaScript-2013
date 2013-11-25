<?php
$article_id = (isset($_GET['id']) == TRUE) ? $_GET['id'] : false;

if ($article_id) {
    $get_article_sql = "SELECT title, content, date FROM articles WHERE article_id='$article_id';";
    $get_article_query = mysqli_query($mysql_connection, $get_article_sql);
    
    $get_article_row = mysqli_fetch_assoc($get_article_query);
    
    ?>
    <a href='./index.php'>Go back to feed</a><br />
    <h3><?php echo $get_article_row['title']; ?></h3>
    <p><?php echo $get_article_row['content']; ?></p>

    <?php
    require_once './comments/show_comments.php';    
    require_once './comments/add_comment.php';
}
else { 
    echo "Article doesm't exist";
}
?>