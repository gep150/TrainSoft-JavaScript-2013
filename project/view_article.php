<!DOCTYPE html>
<html>
    <head>
        <title>View article - JavaScript Basics - TrainSoft</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        
        <link rel="stylesheet" type="text/css" href="styles/base.css" />
        
        <script type="text/javascript" src="scripts/jquery-1.10.2.min.js"></script>
    </head>
    <body>
        
        <div class="content">
        <?php
        require_once("config.php");
        
        if (!isset($_SESSION['user'])) {
            require_once './login.php';
        }
        else {
            require_once './articles/view_article.php';
        }
        ?>
        </div>
    </body>
</html>
