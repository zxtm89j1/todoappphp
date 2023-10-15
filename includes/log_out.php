<?php
session_start();


try {
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION["username"])) {

        session_destroy();
        $success = ["success" => "Logged out successfully!"];
        header('Content-Type: application/json');
        die(json_encode($success));
    } else {
        header("Location: index.php");
    }
} catch (Exception $e) {
    $error = ["error" => $e->getMessage()];
    header('Content-Type: application/json');
    die(json_encode($error));
}
