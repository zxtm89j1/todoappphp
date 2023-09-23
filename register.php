<?php
require_once './includes/db.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST' || isset($_GET['action'])) {


  if ($_SERVER["REQUEST_METHOD"] == "POST") {


    try {
      // var_dump($_POST);
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
      $password_hash =
        password_hash($password, PASSWORD_BCRYPT);

      //SQL query (Insert to DB)
      $query =
        "INSERT INTO users (username, password_hash, email, first_name, last_name) VALUES ('$username', '$password_hash', '$email', '$firstname', '$lastname');";
      var_dump($query);
      if (mysqli_query($conn, $query)) {
        // Registration successful
        $response = ["success" => "Registration successful!"];
        header('Content-Type: application/json');
        echo json_encode($response); // Send JSON response to the front end

      } else {
        throw new Exception(mysqli_error($conn));
      }
    } catch (Exception $e) {

      $error = ["error" => $e->getMessage()];
      header('Content-Type: application/json');
      echo json_encode($error);
    };
  };
} else {
  header('Location: ./index.php');
};
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>YourTodo | Register</title>
  <link rel="stylesheet" href="./css/reset.css" />
  <link rel="stylesheet" href="./css/login.css" />
</head>

<body>
  <form class="register_form">
    <h1>YourTodo</h1>
    <h2>Register here</h2>
    <div>
      <label for="firstname">First Name: </label>
      <input type="text" name="firstname" placeholder="Enter your first name here..." />
    </div>

    <div>
      <label for="lastname">Last Name: </label>
      <input type="text" name="lastname" placeholder="Enter your last name here..." />
    </div>

    <div>
      <label for="lastname">Email: </label>
      <input type="email" name="email" placeholder="Enter your last name here..." />
    </div>

    <div>
      <label for="username">Username: </label>
      <input type="text" name="username" placeholder="Enter your username here..." />
    </div>

    <div>
      <label for="password_register">Enter password here: </label>
      <input type="password" name="password" placeholder="Enter your password here..." />
    </div>

    <div>
      <label for="retype_password_register">Retype password here: </label>
      <input type="text" name="retype_password" placeholder="Enter your password here..." />
    </div>

    <button type="submit">Register</button>
  </form>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <script src="index.js"></script>
</body>

</html>