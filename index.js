$("document").ready(function () {
  // jQuery code for user registration
  $(".register_form").submit(function (e) {
    e.preventDefault();

    let firstname = $(".firstname_input").val();
    let lastname = $(".lastname_input").val();
    let email = $(".email_input").val();
    let username = $(".username_input").val();
    let password = $(".password_input").val();
    let retypePassword = $(".retype_password_input").val();

    $.ajax({
      type: "POST",
      url: "./includes/register_process.php",
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
        retype_password: retypePassword,
      },
      success: function (response) {
        if (response.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: response.success,
            showConfirmButton: false,
            timer: 1800,
          }).then(function () {
            // Redirect to home.php after the SweetAlert2 popup
            window.location.href = "./index.php";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
          });
        }
      },
    });
  });

  //jQuery code for logging in users
  $(".login_form").submit(function (e) {
    e.preventDefault();

    let username = $(".username_login").val();
    let password = $(".password_login").val();

    $.ajax({
      type: "POST",
      url: "./includes/login_process.php",
      data: {
        username: username,
        password: password,
      },
      success: function (response) {
        if (response.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: response.success,
            showConfirmButton: true,
            timer: 1800,
          }).then(function () {
            // Redirect to home.php after the SweetAlert2 popup
            window.location.href = "./home.php";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
          }).then(function () {
            $(".username_login").val("");
            $(".password_login").val("");
          });
        }
      },
    });
  });
});
