// To-Do List Exercise
// Build a simple to-do list where users can add, remove, and mark tasks as complete

// Get HTML elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const totalCount = document.getElementById('total-count');
const completedCount = document.getElementById('completed-count');

// Function to update statistics
function updateStats() {
  const allTasks = todoList.querySelectorAll('.todo-item');
  const completedTasks = todoList.querySelectorAll('.todo-item.completed');

  totalCount.textContent = allTasks.length;
  completedCount.textContent = completedTasks.length;

  console.log(`Stats updated: ${completedTasks.length}/${allTasks.length} completed`);
}

// Function to add a new task - EXAMPLE
function addTask() {
  const taskText = todoInput.value.trim();

  console.log("\n=== Adding New Task ===");
  console.log("Task text:", taskText);

  // Validate input
  if (taskText === '') {
    console.log("❌ Cannot add empty task");
    alert('Please enter a task!');
    return;
  }

  console.log("✅ Creating new task element...");

  // Create new list item
  const li = document.createElement('li');
  li.className = 'todo-item';

  // Create span for task text
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  // Assemble the elements
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add to the list
  todoList.appendChild(li);
  console.log("✅ Task added to DOM");

  // Clear input
  todoInput.value = '';

  // Update stats
  updateStats();
}

// Event listener for Add button
addBtn.addEventListener('click', function () {
  console.log("Add button clicked!");
  addTask();
});

// Allow pressing Enter to add task
todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    console.log("Enter key pressed!");
    addTask();
  }
});

// Event delegation for todo list (handles clicks on tasks and delete buttons)
todoList.addEventListener('click', function (event) {
  console.log("\n=== Click in todo list ===");
  console.log("Clicked element:", event.target);

  // If delete button was clicked
  if (event.target.classList.contains('delete-btn')) {
    console.log("Delete button clicked");
    const todoItem = event.target.parentElement;
    console.log("Removing task:", todoItem.querySelector('.todo-text').textContent);
    todoItem.remove();
    updateStats();
  }

  // If task text was clicked (toggle complete)
  if (event.target.classList.contains('todo-text')) {
    console.log("Task text clicked");
    const todoItem = event.target.parentElement;
    todoItem.classList.toggle('completed');

    if (todoItem.classList.contains('completed')) {
      console.log("✅ Task marked as completed");
    } else {
      console.log("↩️ Task marked as incomplete");
    }

    updateStats();
  }
});

console.log("To-Do List app initialized!");

// YOUR TURN:
// 1. The basic functionality is already working - test it out!
// 2. Try adding a "Clear All Completed" button
// 3. Add ability to edit existing tasks
// 4. BONUS: Save tasks to localStorage so they persist after page reload
