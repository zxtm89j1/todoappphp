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
  <div class="response-modal"></div>
  <form class="register_form">
    <h1>YourTodo</h1>
    <h2>Register here</h2>
    <div>
      <label for="firstname">First Name: </label>
      <input type="text" class="firstname_input" name="firstname" placeholder="Enter your first name here..." />
    </div>

    <div>
      <label for="lastname">Last Name: </label>
      <input type="text" class="lastname_input" name="lastname" placeholder="Enter your last name here..." />
    </div>

    <div>
      <label for="email">Email: </label>
      <input type="email" class="email_input" name="email" placeholder="Enter your email here..." />
    </div>

    <div>
      <label for="username">Username: </label>
      <input type="text" class="username_input" name="username" placeholder="Enter your username here..." />
    </div>

    <div>
      <label for="password_register">Enter password here: </label>
      <input type="password" class="password_input" name="password" placeholder="Enter your password here..." />
    </div>

    <div>
      <label for="retype_password_register">Retype password here: </label>
      <input type="password" class="retype_password_input" name="retype_password" placeholder="Enter your password here..." />
    </div>

    <button type="submit">Register</button>
  </form>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <script src="index.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</body>

</html>