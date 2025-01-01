const dailyTasks = document.getElementById('daily-tasks');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const logList = document.getElementById('log-list');
const logBtn = document.getElementById('log-btn');
const dailyBtn = document.getElementById('daily-btn');
const logSection = document.getElementById('log');
const dailySection = document.getElementById('daily-schedule');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('not-done');
        li.addEventListener('click', () => {
            if (li.classList.contains('not-done')) {
                li.classList.remove('not-done');
                li.classList.add('done');
                logTask(taskText, 'تحقق');
            } else {
                li.classList.remove('done');
                li.classList.add('not-done');
                logTask(taskText, 'لم يتحقق');
            }
        });
        dailyTasks.appendChild(li);
        taskInput.value = '';
    }
});

logBtn.addEventListener('click', () => {
    dailySection.style.display = 'none';
    logSection.style.display = 'block';
});

dailyBtn.addEventListener('click', () => {
    logSection.style.display = 'none';
    dailySection.style.display = 'block';
});

function logTask(task, status) {
    const logEntry = document.createElement('li');
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    logEntry.textContent = `${date}: ${task} - ${status}`;
    logList.appendChild(logEntry);
}
