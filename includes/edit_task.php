<?php
session_start();

require_once "./db.php";


if ($_SERVER["REQUEST_METHOD"] == "GET") {
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
} else {

    try {

        $taskId = $_POST["task_id"];
        $newTitle = $_POST["newTitle"];
        $newDescription = $_POST["newDescription"];
        $newDueDate = $_POST["newDueDate"];
        $newPriority = $_POST["newPriority"];
        $newCategory = $_POST["newCategory"];
        $user = $_SESSION["username"];

        $query = "UPDATE tasks SET task_name = '$newTitle', due_date = '$newDueDate', priority = '$newPriority', category = '$newCategory' WHERE task_id = '$taskId' AND user_username = '$user';";
        if (!mysqli_query($conn, $query)) {
            throw new Exception("Error updating task!");
        }

        $success = ["success" => "Task updated successfully!"];
        header('Content-Type: application/json');
        die(json_encode($success));
    } catch (Exception $e) {
        $error = ["error" => $e->getMessage()];
        header('Content-Type: application/json');
        die(json_encode($error));
    }
}
