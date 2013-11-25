<?php
require_once "config.php";

if (!$_SESSION['user']) {
    echo "<a href='login.php'>Go to login.</a>";
    exit();
}

if (isset($_POST['submit_add_arcticle'])) {

    $title = $_POST['title'];
    $description = $_POST['description'];
    $content = $_POST['content'];
    $date = time();
    $author = 1;

    // We don't have any server side check for the input. This is wrong!

    $create_article_sql = "INSERT INTO articles VALUES('', '$author', '$date', '$title', '$description', '$content');";
    $create_article_query = mysqli_query($mysql_connection, $create_article_sql);

    if ($create_article_query) {
        echo "Article is added. ";
        echo "<a href='add_article.php'>Add new</a> | ";
        echo "<a href='feed.php'>Go to feed</a>";
        exit();
    }
    else {
            echo "Something went wrong!";
    }
}

?>

<h1>Add article</h1>
<form method="POST" action="">
    <fieldset>
        <label for="title-field">Title</label>
        <input type="text" id="title-field" name="title" placeholder="Title of the article" value="" />
    </fieldset>
    
    <fieldset>
        <label for="description-field">Description</label>
        <textarea id="description-field" name="description" placeholder="Type short description here..." maxlength="512" rows="5" cols="50" ></textarea>
    </fieldset>

    <fieldset>
        <label for="content-field">Content</label>
        <textarea id="content-field" name="content" placeholder="Type your content here" rows="15" cols="50"  ></textarea>
    </fieldset>

    <input type="submit" name="submit_add_arcticle" value="Add article" />

    TODO: Add date
    TODO: Add author
</form>