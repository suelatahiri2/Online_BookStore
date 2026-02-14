<?php
session_start ();
include "../includes/config.php";


if ($_SESSION ['user'] ['role']!='admin'){
    die("Access denied");
    }


if (isset ($_POST ['add'])){
  $name=$_POST['name'];
  $price =$_POST ['price'];
  $desc=$_POST['description'];
  $cat=$_POST['category_id'];  

  $image = $_FILES ['image'] ['name']
  move_uploaded_file($_FILES ['image'] ['tmp_name'], "../uploads/" .$image);

  $conn->query("INSERT INTO products(name,price,description,image,category_id)
VALUES('$name','$price','$desc','$image','$cat')");
}
$res=$conn->query("SELECT * FROM products");
?>

<h2>Products</h2>
<form method="post" enctype="multipart/form-data">
<input name="name" placeholder="Name">
<input name="price" placeholder="Price">
<textarea name="description"></textarea>
<input type="file" name="image">
<input name="category_id" placeholder="Category ID">
<button name="add">Add</button>
</form>
<table border ="1">
    <?php while ($row=@res ->fetch_assoc()){
        <tr>
            <td><?php echo $row ['name'];?></td>
            <td><?php echo $row ['price'];?></td>
            <td><?php echo $row ['description'];?></td>
            <td><img src="../uploads/<?php echo $row ['image'];?>" width="50"></td>
            <td><?php echo $row ['category_id'];?></td>
            </tr>
            }
             ?>
             </table>
    }

    >?