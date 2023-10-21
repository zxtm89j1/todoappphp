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
      // console.log(data);
      data.forEach((task) => {
        if (task._status === "false") {
          $(".class_list").append(`<li class="${
            task.priority === "1"
              ? "priority_1"
              : task.priority === "2"
              ? "priority_2"
              : "priority_3"
          }" data-task_id = ${
            task.task_id
          }><input type="checkbox" class="check_done" data-task_id = ${
            task.task_id
          } />
           <div><div class="task_name_div" >${task.task_name}</div>
            <div class="task_description_div" >Description: ${
              task.task_description
            }</div>
            <div class="task_due_div" >Due date: ${task.due_date}</div>
            <div class="task_category_div" >Category: ${
              task.category[0].toUpperCase() + task.category.slice(1)
            }</div></div><svg class="delete_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>
<?xml version="1.0" encoding="utf-8"?><svg class="edit_icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50" height="50" viewBox="0 0 106.86 122.88" style="enable-background:new 0 0 106.86 122.88" xml:space="preserve"><g><path d="M46.77,116.58c1.74,0,3.15,1.41,3.15,3.15c0,1.74-1.41,3.15-3.15,3.15H7.33c-2.02,0-3.85-0.82-5.18-2.15 C0.82,119.4,0,117.57,0,115.55V7.33c0-2.02,0.82-3.85,2.15-5.18C3.48,0.82,5.31,0,7.33,0h90.02c2.02,0,3.85,0.83,5.18,2.15 c1.33,1.33,2.15,3.16,2.15,5.18v50.14c0,1.74-1.41,3.15-3.15,3.15c-1.74,0-3.15-1.41-3.15-3.15V7.33c0-0.28-0.12-0.54-0.31-0.72 c-0.19-0.19-0.45-0.31-0.72-0.31H7.33c-0.28,0-0.54,0.12-0.73,0.3C6.42,6.8,6.3,7.05,6.3,7.33v108.21c0,0.28,0.12,0.54,0.31,0.72 c0.19,0.19,0.45,0.31,0.73,0.31H46.77L46.77,116.58z M98.7,74.34c-0.51-0.49-1.1-0.72-1.78-0.71c-0.68,0.01-1.26,0.28-1.74,0.78 l-3.91,4.07l10.97,10.59l3.95-4.11c0.47-0.48,0.67-1.1,0.66-1.78c-0.01-0.67-0.25-1.28-0.73-1.74L98.7,74.34L98.7,74.34z M78.21,114.01c-1.45,0.46-2.89,0.94-4.33,1.41c-1.45,0.48-2.89,0.97-4.33,1.45c-3.41,1.12-5.32,1.74-5.72,1.85 c-0.39,0.12-0.16-1.48,0.7-4.81l2.71-10.45l0,0l20.55-21.38l10.96,10.55L78.21,114.01L78.21,114.01z M31.58,41.08 c-1.74,0-3.15-1.41-3.15-3.15s1.41-3.15,3.15-3.15h41.54c1.74,0,3.15,1.41,3.15,3.15s-1.41,3.15-3.15,3.15H31.58L31.58,41.08z M31.58,85.77c-1.74,0-3.16-1.43-3.16-3.19s1.41-3.19,3.16-3.19h20.47c1.74,0,3.16,1.43,3.16,3.19s-1.41,3.19-3.16,3.19H31.58 L31.58,85.77z M31.58,63.41c-1.74,0-3.15-1.41-3.15-3.15s1.41-3.15,3.15-3.15h41.54c1.74,0,3.15,1.41,3.15,3.15 s-1.41,3.15-3.15,3.15H31.58L31.58,63.41z"/></g></svg>
        </li>`);
        } else {
          $(".done_tasks_list").append(`<li class="
       done_task" data-task_id = ${
         task.task_id
       }><input type="checkbox" class="check_done" data-task_id = ${
            task.task_id
          } checked />
           <div><div class="task_name_div" >${task.task_name}</div>
            <div class="task_description_div" >Description: ${
              task.task_description
            }</div>
            <div class="task_due_div" >Due date: ${task.due_date}</div>
            <div class="task_category_div" >Category: ${
              task.category[0].toUpperCase() + task.category.slice(1)
            }</div></div><svg class="delete_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>
<?xml version="1.0" encoding="utf-8"?><svg class="edit_icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50" height="50" viewBox="0 0 106.86 122.88" style="enable-background:new 0 0 106.86 122.88" xml:space="preserve"><g><path d="M46.77,116.58c1.74,0,3.15,1.41,3.15,3.15c0,1.74-1.41,3.15-3.15,3.15H7.33c-2.02,0-3.85-0.82-5.18-2.15 C0.82,119.4,0,117.57,0,115.55V7.33c0-2.02,0.82-3.85,2.15-5.18C3.48,0.82,5.31,0,7.33,0h90.02c2.02,0,3.85,0.83,5.18,2.15 c1.33,1.33,2.15,3.16,2.15,5.18v50.14c0,1.74-1.41,3.15-3.15,3.15c-1.74,0-3.15-1.41-3.15-3.15V7.33c0-0.28-0.12-0.54-0.31-0.72 c-0.19-0.19-0.45-0.31-0.72-0.31H7.33c-0.28,0-0.54,0.12-0.73,0.3C6.42,6.8,6.3,7.05,6.3,7.33v108.21c0,0.28,0.12,0.54,0.31,0.72 c0.19,0.19,0.45,0.31,0.73,0.31H46.77L46.77,116.58z M98.7,74.34c-0.51-0.49-1.1-0.72-1.78-0.71c-0.68,0.01-1.26,0.28-1.74,0.78 l-3.91,4.07l10.97,10.59l3.95-4.11c0.47-0.48,0.67-1.1,0.66-1.78c-0.01-0.67-0.25-1.28-0.73-1.74L98.7,74.34L98.7,74.34z M78.21,114.01c-1.45,0.46-2.89,0.94-4.33,1.41c-1.45,0.48-2.89,0.97-4.33,1.45c-3.41,1.12-5.32,1.74-5.72,1.85 c-0.39,0.12-0.16-1.48,0.7-4.81l2.71-10.45l0,0l20.55-21.38l10.96,10.55L78.21,114.01L78.21,114.01z M31.58,41.08 c-1.74,0-3.15-1.41-3.15-3.15s1.41-3.15,3.15-3.15h41.54c1.74,0,3.15,1.41,3.15,3.15s-1.41,3.15-3.15,3.15H31.58L31.58,41.08z M31.58,85.77c-1.74,0-3.16-1.43-3.16-3.19s1.41-3.19,3.16-3.19h20.47c1.74,0,3.16,1.43,3.16,3.19s-1.41,3.19-3.16,3.19H31.58 L31.58,85.77z M31.58,63.41c-1.74,0-3.15-1.41-3.15-3.15s1.41-3.15,3.15-3.15h41.54c1.74,0,3.15,1.41,3.15,3.15 s-1.41,3.15-3.15,3.15H31.58L31.58,63.41z"/></g></svg>
        </li>`);
        }
      });

      // console.log(data);
    }
  }).fail(function (error) {
    console.error("Error:", error);
  });

  //code for the delete button
  $(".done_tasks_list").on("click", ".delete_icon", function () {
    let task_id = $(this).parent().data("task_id");

    $.ajax({
      type: "POST",
      url: "./includes/delete_task.php",
      data: {
        task_id: Number(task_id),
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

  $(".class_list").on("click", ".delete_icon", function () {
    let task_id = $(this).parent().data("task_id");

    $.ajax({
      type: "POST",
      url: "./includes/delete_task.php",
      data: {
        task_id: Number(task_id),
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

  // code for updating task status
  $(".class_list").on("change", ".check_done", function () {
    if (this.checked) {
      let task_id = $(this).data("task_id");
      // console.log(task_id);
      $.post(
        "./includes/status_process.php",
        {
          task_id: Number(task_id),
          status: "true",
        },
        function (response) {
          if (response.success) {
            window.location.reload();
          }
        }
      );
    } else {
      let task_id = $(this).data("task_id");
      // console.log(task_id);
      $.post(
        "./includes/status_process.php",
        {
          task_id: task_id,
          status: "false",
        },
        function (response) {
          if (response.success) {
            window.location.reload();
          }
        }
      );
    }
  });

  $(".done_tasks_list").on("change", ".check_done", function () {
    if (this.checked) {
      let task_id = $(this).data("task_id");
      // console.log(task_id);
      $.post(
        "./includes/status_process.php",
        {
          task_id: task_id,
          status: "true",
        },
        function (response) {
          if (response.success) {
            window.location.reload();
          }
        }
      );
    } else {
      let task_id = $(this).data("task_id");
      // console.log(task_id);
      $.post(
        "./includes/status_process.php",
        {
          task_id: task_id,
          status: "false",
        },
        function (response) {
          if (response.success) {
            window.location.reload();
          }
        }
      );
    }
  });

  $(".close_edit_todo_form").click(function () {
    $(".edit_todo_form").css("display", "none");
  });

  //code for editing a task
  $(".class_list").on("click", ".edit_icon", function () {
    if ($(".edit_todo_form").is(":hidden")) {
      $(".edit_todo_form")
        .css("display", "flex")
        .css("justify-content", "center")
        .css("align-items", "center");
      // $(".edit_todo_form").css("justify-content", "center");
      // $(".edit_todo_form").css("align-items", "center");
    }

    let task_id = $(this).parent().data("task_id");
    $(".edit_todo_form").attr("data-task_id", task_id);

    $.ajax({
      type: "GET",
      url: "./includes/edit_task.php",
      data: {
        task_id: Number(task_id),
      },
      success: function (response) {
        // console.log(response);

        $(".edit_task_title_input").val(response.success.task_name);
        $(".edit_task_description_input").val(
          response.success.task_description
        );

        $(".edit_task_dueDate").val(response.success.due_date);
        $(".edit_priority_input").val(response.success.priority);
        $(".edit_category_input").val(response.success.category);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(ajaxOptions);
        console.log(thrownError);
      },
    });
  });

  //code for editing a task
  $(".done_tasks_list").on("click", ".edit_icon", function () {
    if ($(".edit_todo_form").is(":hidden")) {
      $(".edit_todo_form")
        .css("display", "flex")
        .css("justify-content", "center")
        .css("align-items", "center");
      // $(".edit_todo_form").css("justify-content", "center");
      // $(".edit_todo_form").css("align-items", "center");
    }

    let task_id = $(this).parent().data("task_id");
    $(".edit_todo_form").attr("data-task_id", task_id);

    $.ajax({
      type: "GET",
      url: "./includes/edit_task.php",
      data: {
        task_id: Number(task_id),
      },
      success: function (response) {
        console.log(response);

        $(".edit_task_title_input").val(response.success.task_name);
        $(".edit_task_description_input").val(
          response.success.task_description
        );

        $(".edit_task_dueDate").val(response.success.due_date);
        $(".edit_priority_input").val(response.success.priority);
        $(".edit_category_input").val(response.success.category);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(ajaxOptions);
        console.log(thrownError);
      },
    });
  });

  // code for submitting edited/modified data
  $(".edit_todo_form").submit(function (e) {
    e.preventDefault();

    let task_id = $(this).data("task_id");
    let newTitle = $(".edit_task_title_input").val();
    let newDescription = $(".edit_task_description_input").val();
    let newDueDate = $(".edit_task_dueDate").val();
    let newPriority = $(".edit_priority_input").val();
    let newCategory = $(".edit_category_input").val();

    console.log(newDueDate);
    $.ajax({
      type: "POST",
      url: "./includes/edit_task.php",
      data: {
        task_id: Number(task_id),
        newTitle: newTitle,
        newDescription: newDescription,
        newDueDate: newDueDate,
        newPriority: newPriority,
        newCategory: newCategory,
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

  //code for log out
  $(".log_out_button").on("click", function () {
    // e.preventDefault();

    // alert("Logged out!");

    $.ajax({
      type: "POST",
      url: "./includes/log_out.php",
      success: function (response) {
        if (response.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: response.success,
            showConfirmButton: true,
            timer: 1800,
          }).then(function () {
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

  //code for submitting/adding a task
  $("#add_todo_form").submit(function (e) {
    e.preventDefault();

    let title = $(".task_title_input").val();
    let description = $(".task_description_input").val();
    let dueDate = $(".task_dueDate").val();
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
        // console.log("Hello");
        // console.log(response);
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
