import plusIcon from './images/plus.svg';
import projectCreator from './project';
import toDoItemCreator from './task';

const main = document.querySelector('.main');
const today = document.querySelector('.today-button');
const inbox = document.querySelector('.inbox-button');
const thisWeek = document.querySelector('.this-week-button');
const projectsContainer = document.querySelector('.projects-container');

// Creating the dom elements to be displayed in the various tabs
const inboxDom = document.createElement('div');
const todayDom = document.createElement('div');
const thisWeekDom = document.createElement('div');

inboxDom.innerHTML += `
    <h2>Inbox</h2>
    <div class="item-container"></div>
`;
createAddTask(inboxDom, 'task');

todayDom.innerHTML += `
    <h2>Today</h2>
    <div class="item-container"></div>
`;
thisWeekDom.innerHTML += `
    <h2>This Week</h2>
    <div class="item-container"></div>
`;

export {
  inboxDom, todayDom, thisWeekDom, inbox,
};

// Adding functionality to the tabs
export default function tabsListeners() {
  // Setting the initial tab to the inbox tab
  inbox.classList.add('active');
  main.appendChild(inboxDom);

  // Adding event listeners to each tab to know which one is active
  today.addEventListener('click', () => {
    changeActive();
    today.classList.add('active');
    main.appendChild(todayDom);
  });

  thisWeek.addEventListener('click', () => {
    changeActive();
    thisWeek.classList.add('active');
    main.appendChild(thisWeekDom);
  });

  inbox.addEventListener('click', () => {
    changeActive();
    inbox.classList.add('active');
    main.appendChild(inboxDom);
  });
}

// Function to be called inside the event listeners
export function changeActive() {
  thisWeek.classList.remove('active');
  today.classList.remove('active');
  inbox.classList.remove('active');
  for (let i = 0; i < projectsContainer.childNodes.length; i++) {
    projectsContainer.childNodes[i].classList.remove('active');
  }
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}

// Function to create the add task button and implement its functionality
export function createAddTask(domElement, job) {
  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task');
  const plusImg = document.createElement('img');
  plusImg.src = plusIcon;
  const addTaskText = document.createElement('p');
  if (job == 'task') {
    addTaskText.innerHTML = 'Add Task';
  } else {
    addTaskText.innerHTML = 'Add Project';
  }
  addTaskButton.appendChild(plusImg);
  addTaskButton.appendChild(addTaskText);
  domElement.appendChild(addTaskButton);

  // The flag variable is used to determine whether the inputContainer has already been created or not
  let flag = 0;
  const inputContainer = document.createElement('form');
  inputContainer.classList.add('input-container');
  // Prevents the page from reloading when the add button is clicked
  function handleForm(event) { event.preventDefault(); }
  inputContainer.addEventListener('submit', handleForm);

  // Functionality of the add task button (Add task button dissapears and the input appears)
  addTaskButton.addEventListener('click', () => {
    // If the input container does not exist we create it
    if (flag == 0) {
      const input = document.createElement('input');
      input.type = 'Text';
      input.placeholder = 'Enter Task Name';

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      const addButton = document.createElement('button');
      addButton.classList.add('add-button');
      addButton.innerHTML = 'Add';
      addButton.type = 'submit';
      // Event listener to add a task
      addButton.addEventListener('click', () => {
        // Checks whether or not an input has been entered
        if (input.value == '') {
          alert('Please enter a task name');
        } else {
          const taskName = input.value;

          // Creating the task in the dom
          if (job == 'task') {
            const newItem = new toDoItemCreator(taskName);
            newItem.createTaskDom(domElement, null);
          }

          // Creating a tab for a project
          else {
            const newProject = new projectCreator(taskName);
            newProject.createTab();
          }

          inputContainer.classList.add('inactive');
          addTaskButton.classList.remove('inactive');
          input.value = '';
        }
      });

      const cancelButton = document.createElement('button');
      cancelButton.classList.add('cancel-button');
      cancelButton.innerHTML = 'Cancel';
      cancelButton.type = 'button';
      // Event listener to close the form
      cancelButton.addEventListener('click', () => {
        inputContainer.classList.add('inactive');
        addTaskButton.classList.remove('inactive');
      });

      buttonContainer.appendChild(addButton);
      buttonContainer.appendChild(cancelButton);
      inputContainer.appendChild(input);
      inputContainer.appendChild(buttonContainer);
      domElement.appendChild(inputContainer);
      addTaskButton.classList.add('inactive');
      flag += 1;
    }

    // The input container has already been created so we just have to change the classes to hide and show the correct elements.
    else {
      addTaskButton.classList.add('inactive');
      inputContainer.classList.remove('inactive');
    }
  });
}
