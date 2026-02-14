<?php
session_start();
include "../includes/config.php";

if(isset($_POST['add')){
    $name=$_POST['name'];
    $conn->query("INSERT INTO categories(name) VALUES('$name')");
}

$res=$conn->query("SELECT * FROM categories");
?>

<form method="post">
    <input type="text" name="name" placeholder="Category Name">
    <button type="submit" name="add">Add</button>
</form>

<table border='1'>
    <?php while($row=$res->fetch_assoc()){
    ?>
    <tr>
        <td>
            <?php
            echo $row['name'];
            ?>
        </td>
    </tr>
    <?php
    }
    ?>
    </table>