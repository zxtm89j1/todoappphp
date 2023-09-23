$("document").ready(function () {
  $(".register_form").submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "./register.php",
      data: $(this).serialize(),
      dataType: "json",
      success: function (response) {
        console.log(response);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      },
    });
  });
});
