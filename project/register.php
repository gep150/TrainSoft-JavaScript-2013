<!DOCTYPE html>
<html>
    <head>
        <title>Register - JavaScript Basics - TrainSoft</title>
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


            if (isset($_SESSION['user'])) {
                echo "<a href='feed.php'>You are already logged, ".$_SESSION['user'].". Go to feed.</a>";
                exit();
            }
            else {
                echo "<a href='index.php'>Go to login.</a>";
            }

            if (isset($_POST['submit_register'])) {

                $username = $_POST['username'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $password2 = $_POST['password2'];

                // We don't have any server side check for the input. This is wrong!
                $create_user_sql = "INSERT INTO users VALUES('', '$username', '$email', '$password');";
                $create_user_query = mysqli_query($mysql_connection, $create_user_sql);

                if ($create_user_query) {
                    echo "You are registered. ";
                    echo "<a href='login.php'>Now go and login</a>";
                }
                else {
                    echo "Something went wrong!";
                }
            }

            ?>


            <h1>Register</h1>
            <form method="POST" action="">
                <fieldset>
                    <legend><label for="username-field">Username</label></legend>
                    <input type="text" id="username-field" name="username" placeholder="user" value="" />
                </fieldset>

                <fieldset>
                    <legend><label for="email-field">Email</label></legend>
                    <input type="email" id="email-field" name="email" placeholder="my@email.com" value="" />
                </fieldset>

                <fieldset>
                    <legend><label for="password-field">Password</label></legend>
                    <input type="password" id="password-field" name="password" placeholder="password" value="" />
                </fieldset>

                <fieldset>
                    <legend><label for="password2-field">Repeat it</label></legend>
                    <input type="password" id="password2-field" name="password2" placeholder="repeat password" value="" /><br />
                </fieldset>

                <input type="submit" name="submit_register" value="Register" />
            </form>
        </div>
    </body>
</html>