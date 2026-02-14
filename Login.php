<?php
session_start();
include "includes/config.php";

if(isset($_POST['login'])){
    $email=$_POST['email'];
    $password=$_POST['password'];

    $res=$conn->query("SELECT * FROM users WHERE email='$email' ");
    $user=$res->fetch_assoc();

    if($user && password_verify($password,$user ['password'])){
        $_SESSION['user']=$user;
        header("Location: booksPage.php");
    }else{
        echo "Login failed!";
    }
}
 ?>

 <form method="post">
    <input type="email" name="email" required>
    <input type="password" name="password" required>
    <button name="login">Login</button>
</form>
