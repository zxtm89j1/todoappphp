<?php
session_start();

require_once "./db.php";



try {
    $taskId = $_GET["task_id"];

    $query = "SELECT * FROM tasks where task_id = '$taskId';";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
    } else {
        throw new Exception("Task not found in the database!");
    }


    $success = ["success" => $row];
    header('Content-Type: application/json');
    die(json_encode($success));
} catch (Exception $e) {
    $error = ["error" => $e->getMessage()];
    header('Content-Type: application/json');
    die(json_encode($error));
}
