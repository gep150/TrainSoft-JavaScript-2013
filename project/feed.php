<?php
require_once "config.php";

if (!$_SESSION['user']) {
    echo "<a href='index.php'>You are not logged. Go to login.</a>";
    exit();
}
else {
    echo "<a href='add_article.php'>Add article</a> | ";
    echo "<a href='logout.php'>Logout</a>";

    //require_once "./articles/show_articles.php";
    echo "<div id='ajax_articles'>Loading articles</div>";
}