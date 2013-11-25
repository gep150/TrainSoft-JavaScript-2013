<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Basics - TrainSoft</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        
        <link rel="stylesheet" type="text/css" href="styles/base.css" />
        
        <script type="text/javascript" src="scripts/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="scripts/ajax.js"></script>
    </head>
    <body>
        <div class="content">
            <?php
            require_once "config.php";

            session_destroy();
            echo "<a href='index.php'>You are not logged. Go to login.</a> | ";
            echo "<a href='register.php'>Go to register.</a> ";
            ?>
        </div>
    </body>
</html>