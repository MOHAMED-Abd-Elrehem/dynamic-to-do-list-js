document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.classList.add = 'add';
        
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
      removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
  
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    addTask(); // Add an initial task on page load
  });