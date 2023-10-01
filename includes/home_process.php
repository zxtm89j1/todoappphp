<?php
session_start();

require_once './db.php';

try {
    $loggedInUser = $_SESSION["username"];

    $query = "SELECT * FROM tasks WHERE user_username = '$loggedInUser' AND _status = 'false'";
    $result = mysqli_query($conn, $query);

    $array = mysqli_fetch_all($result, MYSQLI_ASSOC);

    if (!$result) {
        throw new Exception("Error found while fetching results!");
    }

    if (empty($array)) {
        header('Content-Type: application/json');
        die(json_encode(["success" => "No tasks found!"]));
    }

    header('Content-Type: application/json');
    die(json_encode($array));
} catch (Exception $e) {
    $error = ["error" => $e->getMessage()];
    header('Content-Type: application/json');
    die(json_encode($error));
}
