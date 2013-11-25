<?php
require_once "config.php";

if (isset($_SESSION['user'])) {
    echo "<a href='feed.php'>You are already logged, ".$_SESSION['user'].". Go to feed.</a>";
    exit();
}

/*
if (isset($_POST['submit_login'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $check_user_sql = "SELECT user_id FROM users WHERE username='$username' AND password='$password';";
    $check_user_query = mysqli_query($mysql_connection, $check_user_sql);

    if (mysqli_num_rows($check_user_query) == 1) {
        echo "You are logged now. ";

        $get_user_sql = "SELECT user_id FROM users WHERE username='$username';";
        $get_user_query = mysqli_query($mysql_connection, $get_user_sql);

        $get_user_row = mysqli_fetch_assoc($get_user_query);
        $user_id = $get_user_row['user_id'];
        
        $_SESSION['user'] = array("id" => $user_id, "username" => $username);
        echo "<a href='index.php'>Go to feed</a>";
        exit();
    }
    else {
        echo "Wrong input";
    }
}
*/
?>

<h1>Login</h1>
<br /><br /><br />
<form method="POST">

    <fieldset>
        <legend><label for="username-field">Username</label></legend>
        <input type="text" id="username-field" name="username" placeholder="user" value="" />
    </fieldset>

    <fieldset>
        <legend><label for="password-field">Password</label></legend>
        <input type="password" id="password-field" name="password" placeholder="password" value="" />
    </fieldset>
    
    <div id="login-errors"></div>

    <input type="button" onclick="checkLogin()" value="Login" />
    <a href="register.php">Register</a>
</form>