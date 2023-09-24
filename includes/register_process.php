<?php
require_once './db.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST' || isset($_GET['action'])) {


    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        try {
            // Validate and sanitize user input
            $username = trim(mysqli_real_escape_string($conn, $_POST["username"]));
            $password = trim(mysqli_real_escape_string($conn, $_POST["password"]));
            $retype_password = trim(mysqli_real_escape_string($conn, $_POST["retype_password"]));
            $email = trim(mysqli_real_escape_string($conn, $_POST["email"]));
            $firstname = trim(mysqli_real_escape_string($conn, $_POST["firstname"]));
            $lastname = trim(mysqli_real_escape_string($conn, $_POST["lastname"]));


            //Check to see if passwords match
            if ($password != $retype_password) {
                throw new Exception("Passwords do not match!");
            }

            //Calidate email format
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                throw new Exception("Invalid email format!");
            }

            //password hashing
            $password_hash = password_hash($password, PASSWORD_BCRYPT);

            //SQL query (Insert to DB)
            $query = "INSERT INTO users (username, password_hash, email, first_name, last_name) VALUES ('$username', '$password_hash', '$email', '$firstname', '$lastname');";

            if (mysqli_query($conn, $query)) {
                // Registration successful
                $response = ["success" => "Registration successful!"];
                header('Content-Type: application/json');
                die(json_encode($response));
            } else {
                throw new Exception(mysqli_error($conn));
            }
        } catch (Exception $e) {

            $error = ["error" => $e->getMessage()];
            header('Content-Type: application/json');
            die(json_encode($error));
        };
    };
} else {
    header('Location: ./index.php');
};
