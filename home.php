<?php
session_start();
if (!isset($_SESSION["username"])) {
    header("Location: index.php");
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="./css/home.css" />
</head>

<body class="home_body">
    <div class="edit_todo_form_container">
        <form class="edit_todo_form">



            <div class="edit_todo_form_content">
                <div class="edit_form_header">
                    <h2>Edit Task</h2>
                    <svg class="close_edit_todo_form" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50" height="50" viewBox="0 0 122.878 122.88" enable-background="new 0 0 122.878 122.88" xml:space="preserve">
                        <g>
                            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                        </g>
                    </svg>
                </div>

                <div class="item_container"><label for="edit_task_title">Task title</label>
                    <input type="text" class="edit_task_title_input" placeholder="Enter task title here...">
                </div>

                <div class="item_container"><label for="edit_task_description">Description</label>
                    <input type="text" class="edit_task_description_input" placeholder="Enter task description here...">
                </div>
                <div class="item_container"><label for="edit_due_date">Due Date: </label>
                    <input type="date" class="edit_task_dueDate" id="datePicker">
                </div>
                <div class="item_container"><label for="edit_priority">Priority: </label>
                    <select name="edit_priority_input" class="edit_priority_input">
                        <option value="None">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="item_container"><label for="edit_category">Category: </label>
                    <select name="edit_category_input" class="edit_category_input">
                        <option value="None">None</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="home">Home</option>
                    </select>
                </div>

                <div class="edit_task_button_container"><button type="submit" class="edit_task_button">Save Task</button></div>

            </div>

        </form>
    </div>

    <div class=" logout_container"><button class="log_out_button">Log out</button></div>
    <div class="add_todo_form_container">
        <form class="add_todo_form" id="add_todo_form">
            <h2>Add Task</h2>

            <div class="item_container"><label for="task_title">Task title</label><input type="text" class="task_title_input" placeholder="Enter task title here..."></div>

            <div class="item_container"><label for="task_description">Description</label>
                <input type="text" class="task_description_input" placeholder="Enter task description here...">
            </div>
            <div class="item_container"><label for="due_date">Due Date: </label>
                <input type="date" class="task_dueDate" id="datePicker">
            </div>
            <div class="item_container"><label for="priority">Priority: </label>
                <select name="priority_input" class="priority_input">
                    <option value="None">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="item_container"><label for="category">Category: </label>
                <select name="category_input" class="category_input">
                    <option value="None">None</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="home">Home</option>
                </select>
            </div>

            <div class="add_task_button_container"><button type="submit" class="add_task_button">Add Task</button></div>
        </form>
    </div>


    <h2>Your tasks</h2>
    <div class="no_task"></div>

    <ul class="class_list"></ul>
    <h2>Done Tasks</h2>
    <ul class="done_tasks_list">

    </ul>




    <script src=" https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>
    <script src="./home.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>




</html>