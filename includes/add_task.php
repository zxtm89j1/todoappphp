<?php
session_start();

require_once './db.php';

$title = $_POST["taskTitle"];
$description = $_POST["taskDescription"];
$dueDate = $_POST["dueDate"];
$priority = $_POST["priority"];
$category = $_POST["category"];
$user = $_SESSION["username"];


try {
    if (empty(trim($title)) || empty(trim($description)) || empty($dueDate) || $priority == "None" || $category == "None") {
        throw new Exception("Please fill in the fields appropriately!");
    }

    $query = "INSERT INTO tasks (task_name, task_description, due_date, priority, _status, category, user_username) VALUES ('$title', '$description', '$dueDate', '$priority', 'false', '$category', '$user');";

    if (!mysqli_query($conn, $query)) {
        throw new Exception("Error in saving the task! Please check the database");
    }

    $success = ["success" => "Task added!"];
    header('Content-Type: application/json');
    die(json_encode($success));
} catch (Exception $e) {
    $error = ["error" => $e->getMessage()];
    header('Content-Type: application/json');
    die(json_encode($error));
}
