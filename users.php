<?php 
include"../includes/db.php";

if(isset($_POST['add'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $conn->query("INSERT INTO users(name,email,password)VALUES('$name','$email','$password')");

}


if(isset($_GET['delete'])){
    $id = $_GET['delete'];
    $conn->query("DELETE FROM users WHERE id=$id");
}

if(isset($_POST['update'])){
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $conn->query("UPDATE users SET name='$name', email='$email' WHERE id=$id");
    header("Location: users.php");
    exit;
}

$edit_user = null;
if(isset($_GET['edit'])){
    $id =$_GET['edit'];
    $res =$conn->query("SELECT * FROM users Where id=$id");
    $edit_user =$res-> fetch_assoc();

}
?>

<h2>Users</h2>

<form method="post">
    <?php if($edit_user): ?>
        <input type="hidden" name="id" value="<?php echo $edit_user['id']; ?> ">
        <input type="text" name="name" value="<?php echo $edit_user['name']; ?>" required>
        <input type="email" name="email" value="<?php echo $edit_user['email']; ?> " required>
        <button type="submit" name="update">Update User </button>
        <a href="users.php">Cancel</a>

    <?php else: ?>
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" name="add">Add Users</button>
    <?php endif; ?>

    <table border="1" cellpadding="5" cellspacing="0">
    <tr> 
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>

    </tr>

    <?php
    $res = $conn->query("SELECT * FROM users");
    while($row = $res->fetch_assoc()){
        echo "<tr>
             <td>{$row['id']}</td>
             <td>{$row['name']} </td>
             <td>{$row['email']} </td>
             <td> 
             <a href='users.php?edit={$row['id']}'>Edit</a> |
             <a href='users.php?delete={$row['id']}'>Delete</a>
             </td>
        </tr>";
    }

    ?>
         