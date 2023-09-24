<?php

session_start();

require_once './db.php';

try {

    $usernameLogIn = $_POST["username"];
    $passwordLogIn = $_POST["password"];

    if (empty($usernameLogIn) && empty($passwordLogIn)) {
        throw new Exception("Please don't leave the fields empty!");
    }

    if (empty($usernameLogIn)) {
        throw new Exception("Please don't leave the username field empty!");
    }

    if (empty($passwordLogIn)) {
        throw new Exception("Please don't leave the password field empty!");
    }

    if (isset($_POST["username"]) && isset($_POST["password"])) {

        //mysql query
        $query = "SELECT * FROM users where username='$usernameLogIn';";
        $result = mysqli_query($conn, $query);

        // check if the query returns a row from the database
        if (mysqli_num_rows($result) == 1 && $result) {
            $row = mysqli_fetch_assoc($result);
            $hashedPasswordFromDb = $row["password_hash"];

            //verfiy the password from log in and db
            if (password_verify($passwordLogIn, $hashedPasswordFromDb)) {
                $_SESSION["username"] = $usernameLogIn;
                $response = ["success" => "Logged in successfully!"];
                header('Content-Type: application/json');
                die(json_encode($response));
            } else {
                throw new Exception("Invalid password!");
            }
        } else {
            throw new Exception("No user with username: " . $usernameLogIn . " found!");
        }
    }
} catch (Exception $e) {
    $error = ["error" => $e->getMessage()];
    header('Content-Type: application/json');
    die(json_encode($error));
}
