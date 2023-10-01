$("document").ready(function (e) {
  // Create a Date object for the minimum date you want to set
  const minDate = new Date(); // This sets the minimum date to today

  // Format the minimum date as YYYY-MM-DD (required for the input's 'min' attribute)
  const minDateFormatted = minDate.toISOString().split("T")[0];

  $("#datePicker").attr("min", minDateFormatted);

  $.get("./includes/home_process.php", function (data) {
    if (data.success === "No tasks found!") {
      $(".no_task").text("No tasks found!");
    } else {
      data.forEach((task) => {
        $(".class_list").append(`<li><input type="checkbox" class="check_done">
           <div><div>${task.task_name}</div>
            <div>Description: ${task.task_description}</div>
            <div>Due date: ${task.due_date}</div>
            <div>Category: ${
              task.category[0].toUpperCase() + task.category.slice(1)
            }</div></div>
        </li>`);
      });
      console.log(data);
    }
  });

  $("#add_todo_form").submit(function (e) {
    e.preventDefault();

    let title = $(".task_title_input").val();
    let description = $(".task_description_input").val();
    let dueDate = $("#datePicker").val();
    let priority = $(".priority_input").val();
    let category = $(".category_input").val();

    $.ajax({
      type: "POST",
      url: "./includes/add_task.php",
      data: {
        taskTitle: title,
        taskDescription: description,
        dueDate: dueDate,
        priority: Number(priority),
        category: category,
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
            $(".task_title_input").val("");
            $(".task_description_input").val("");
            $("#datePicker").val("");
            $(".priority_input").val("None");
            $(".category_input").val("None");

            location.reload();
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
          });
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(ajaxOptions);
        console.log(thrownError);
      },
    });
  });
});
