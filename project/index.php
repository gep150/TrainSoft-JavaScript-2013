<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Basics - TrainSoft</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        
        <link rel="stylesheet" type="text/css" href="styles/base.css" />
        <link rel="stylesheet" type="text/css" href="styles/responsive.base.css" />
        
        <script type="text/javascript" src="scripts/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="scripts/ajax.js"></script>
    </head>
    <body>
        
        <div class="content">
            <?php
            require_once("config.php");
            require_once './sessions/ajax_is_logged.php';

            if (!isset($_SESSION['user'])) {
                require_once './login.php';
            }
            else {
                require_once './feed.php';
            }
            ?>
            
        </div>
    </body>
</html>
