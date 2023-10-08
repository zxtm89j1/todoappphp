<?php
session_start();
require_once "./db.php";


try {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $taskId = $_REQUEST["task_id"];

        $query = "DELETE FROM tasks WHERE task_id = '$taskId';";

        if (!mysqli_query($conn, $query)) {
            throw new Exception("Error in deleting the task!");
        }

        $success = ["success" => "Task successfully deleted!"];
        header('Content-Type: application/json');
        die(json_encode($success));
    }
} catch (Exception $e) {
    $error = ["error" => $e->getMessage()];
    header('Content-Type: application/json');
    die(json_encode($error));
}
