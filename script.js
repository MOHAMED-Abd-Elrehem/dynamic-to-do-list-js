document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    function loadTasks() {
      tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', () => {
          taskList.removeChild(taskItem);
          tasks = tasks.filter(t => t !== task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        });
  
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
      });
    }
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
      taskItem.classList.add = "taskItem";
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
      removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
  
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  
    loadTasks();
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });