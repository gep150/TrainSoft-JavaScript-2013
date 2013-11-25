<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if (isset($_POST['submit_add_comment'])) {
    $user_id = $_SESSION['user']['id'];
    $comment = $_POST['comment'];
    $date = date("Y-m-d H:i:s", time());
    
    $create_comment_sql = "INSERT INTO comments VALUES('', '$article_id', '$user_id', '$date', '$comment');";
    $create_comment_query = mysqli_query($mysql_connection, $create_comment_sql);

    if ($create_comment_query) {
        echo "Comment is added. ";
        $location = "view_article.php?id=".$article_id;
        header("Location: ".$location);
        exit();
    }
    else {
        echo "Something went wrong!";
    }
}
?>

<form method='post' acrion=''>   
    <fieldset>
        <label for="comment-field">Your comment</label>
        <textarea id="comment-field" name="comment" placeholder="Type your opinion..." maxlength="512" rows="5" cols="50" ></textarea>
    </fieldset>
    
    <input type="submit" name="submit_add_comment" value="Add comment" />
</form>
