<?php
include "includes/config.php";

if(isset($_POST['send'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $conn->query("INSERT INTO contact_messages(name,email,subject, message)
    VALUES('$name','$email','$subject','$message')");

    echo "Mesazhi u dergua!";
}
?>

<form method="post">
    <input name="name" placeholder="Name">
    <input name="email" placeholder="Email">
    <input name="subject" placeholder="Subject">
    <textarea name="message">Message</textarea>
    <button name="send">Send</button>
</form>