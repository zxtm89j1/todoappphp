<?php
$servername = "localhost";
$username = "root";
$password = null;
$db_name = "todoapp";

try {
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $db_name);

    if (!$conn) {
        throw new Exception("Something's wrong with the database connection!");
    }
} catch (Exception $e) {
    $errorMessage = ["error" => $e->getMessage()];
    die(json_encode($error));
}
