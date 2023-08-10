import plusIcon from './images/plus.svg'

const main = document.querySelector('.main');
const today = document.querySelector(".today-button");
const inbox = document.querySelector(".inbox-button");
const thisWeek = document.querySelector(".this-week-button");

//Creating the dom elements to be displayed in the various tabs
const inboxDom = document.createElement('div');
const todayDom = document.createElement('div');
const thisWeekDom = document.createElement('div');

inboxDom.innerHTML += `
    <h2>Inbox</h2>
    <div class="item-container"></div>
`
createAddTask(inboxDom);

todayDom.innerHTML += `
    <h2>Today</h2>
    <div class="item-container"></div>
`
thisWeekDom.innerHTML += `
    <h2>This Week</h2>
    <div class="item-container"></div>
`


//Adding functionality to the tabs
export default function tabsListeners() {

    //Setting the initial tab to the inbox tab
    inbox.classList.add('active');
    main.appendChild(inboxDom);

    //Adding event listeners to each tab to know which one is active 
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

//Function to be called inside the event listeners
function changeActive () {
    thisWeek.classList.remove('active');
    today.classList.remove('active');
    inbox.classList.remove('active');
    while (main.firstChild) {
        main.removeChild(main.lastChild);
      }
}


//Function to add a create task button to any tab when necessary
function createAddTask(domElement) {
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task');
    const plusImg = document.createElement('img');
    plusImg.src = plusIcon;
    const addTaskText = document.createElement('p');
    addTaskText.innerHTML = "Add Task";
    addTaskButton.appendChild(plusImg);
    addTaskButton.appendChild(addTaskText);
    domElement.appendChild(addTaskButton);

    //Functionality of the add task button (Add task button dissapears and the input appears)
    addTaskButton.addEventListener('click' , () => {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        const input = document.createElement('input');
        input.type = "Text";
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        const addButton = document.createElement('button');
        addButton.classList.add('add-button');
        addButton.innerHTML = "Add";
        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-button');
        cancelButton.innerHTML = "Cancel";
        
        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);
        inputContainer.appendChild(input);
        inputContainer.appendChild(buttonContainer);

        addTaskButton.style.display = 'none';
        domElement.appendChild(inputContainer);
    });
}
