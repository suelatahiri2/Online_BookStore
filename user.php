<?php
session_start();
include "../includes/config.php";

if($_SESSION['user']['role']!='admin'){
    die("Access denied");
}

if(isset($_POST{'add'})){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=password_hash($_POST['password'], PASSWORD_DEFAULT);


    $conn->query("INSERT INTO user(name,email,password)
    VALUES('$name','$email','$password')")
}

if(isset($_GET['delete'])){
    $id=$_GET['delete']
    $conn->query("DELETE FROM users WHERE id=$id");

}

$res=$conn->query("SELECT * FROM users");
?>


<h2>Users</h2>

<form method="post"> 
    <input name="name" placeholder="Name">
    <input name="email" placeholder="Email"
    <input name="password" placeholder="Password">
    <button name="add">Add</button>
</form>

<table border="1">
    <?php while($row=$res->fetch_assoc()){
        ?>
        <tr> 
            <td><?php echo $row['name']; ?></td>
            <td><?php echo $row['email']; ?></td>
            <td><a href="?delete=<?php $row['id']; ?>">Delete</a></td>
        </tr>
        <?php } ?>

    </table>
    