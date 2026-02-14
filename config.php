<?php 

$host = "localhost";
$dbname = "bookstore";
$user = "root";
$password = "":


try{
    $conn = new mysqli($host, $user, $password, $dbname);

    if($conn->connect_error){
        die("Konektimi deshtoi: " .$conn->connect_error);
    }
    $conn->set_charset("utf8mb4");
}
    catch (Exception $e){
     die("Diqka eshte gabim: " . $e->getMessage());
    }
?>