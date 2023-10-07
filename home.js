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
      console.log(data);
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
          }>
           <div><div>${task.task_name}</div>
            <div>Description: ${task.task_description}</div>
            <div>Due date: ${task.due_date}</div>
            <div>Category: ${
              task.category[0].toUpperCase() + task.category.slice(1)
            }</div></div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>
        </li>`);
        } else {
          $(".done_tasks_list").append(`<li class="
       done_task data-task_id = ${
         task.task_id
       }"><input type="checkbox" class="check_done" data-task_id = ${
            task.task_id
          } checked>
           <div><div>${task.task_name}</div>
            <div>Description: ${task.task_description}</div>
            <div>Due date: ${task.due_date}</div>
            <div>Category: ${
              task.category[0].toUpperCase() + task.category.slice(1)
            }</div></div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>
        </li>`);
        }
      });

      // console.log(data);
    }
  }).fail(function (error) {
    console.error("Error:", error);
  });

  $(".class_list").on("change", ".check_done", function () {
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
