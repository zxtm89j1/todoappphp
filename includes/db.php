<?php
$servername = "localhost";
$username = "root";
$password = null;
$db_name = "todoapp";

try {
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $db_name);
} catch (Exception $e) {
    $error = $e->getMessage();
    echo json_encode($error);
}
