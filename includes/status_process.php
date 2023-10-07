<?php
session_start();

require_once './db.php';



try {
    $task_id = $_POST["task_id"];
    $status = $_POST["status"];
    $user = $_SESSION["username"];

    $query = "UPDATE tasks SET _status = '$status' WHERE task_id = '$task_id' AND user_username = '$user';";

    if (!mysqli_query($conn, $query)) {
        throw new Exception("Error updating task status!");
    }

    $success = ["success" => "Task updated successfully!"];
    header('Content-Type: application/json');
    die(json_encode($success));
} catch (Exception $e) {
    $error = ["error" => $e->getMessage()];
    header('Content-Type: application/json');
    die(json_encode($error));
}
