<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="./css/home.css" />
</head>

<body>
    <form id="add_todo_form">
        <h2>Add Todos</h2>
        <label for="task_title">Task title</label>
        <input type="text" class="task_title_input" placeholder="Enter task title here...">
        <label for="task_description">Description</label>
        <input type="text" class="task_description_input" placeholder="Enter task description here...">
        <label for="due_date">Due Date: </label>
        <input type="date" class="task_dueDate" id="datePicker">
        <label for="priority">Priority: </label>
        <select name="priority_input" class="priority_input">
            <option value="None">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <label for="category">Category: </label>
        <select name="category_input" class="category_input">
            <option value="None">None</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="home">Home</option>
        </select>

        <button type="submit">Add Task</button>
    </form>

    <label for="">Your tasks</label>
    <div class="no_task"></div>

    <ul class="class_list"></ul>
    <h2>Done Tasks</h2>




    <script src=" https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="./home.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>




</html>