
<h1>Comments</h1>
<?php

$get_comments_sql = "SELECT user_id, content, date FROM comments WHERE article_id='$article_id' ORDER BY comment_id DESC;";
$get_comments_query = mysqli_query($mysql_connection, $get_comments_sql);

if (mysqli_num_rows($get_comments_query) >= 1) {
	
    while ($get_comments_row = mysqli_fetch_assoc($get_comments_query)) {
        // get username
        $comment_user_id = $get_comments_row['user_id'];
        $get_username_sql = "SELECT username FROM users WHERE user_id='$comment_user_id';";
        $get_username_query = mysqli_query($mysql_connection, $get_username_sql);
        
        $get_username_row = mysqli_fetch_assoc($get_username_query);
        ?>
        <div>
            <h3><?php echo $get_username_row['username']; ?> on <?php echo $get_comments_row['date']; ?></h3>
            <pre><?php echo $get_comments_row['content']; ?></pre>
        </div>
        <hr />
        <br />
        <?php
    }


}
else {
    echo "we don't have any records.";
}

?>