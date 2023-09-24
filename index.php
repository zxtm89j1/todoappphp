<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>YourTodo | Log In</title>
  <link rel="stylesheet" href="./css/reset.css" />
  <link rel="stylesheet" href="./css/login.css" />
</head>

<body>
  <form class="login_form">
    <h1>YourTodo</h1>
    <h2>Log In here</h2>
    <div>
      <label for="username">Username: </label>
      <input class="username_login" type="text" name="username" placeholder="Enter your username here..." />
    </div>

    <div>
      <label for="password">Password: </label>
      <input class="password_login" type="password" name="password" placeholder="Enter your password here..." />
    </div>
    <div>
      Don't have an account? Create one <a href="./register.php?action=register">here.</a>
    </div>

    <button type="submit">Submit</button>
  </form>

  <script src=" https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <script src="index.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


</body>

</html>