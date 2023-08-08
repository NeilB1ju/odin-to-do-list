const main = document.querySelector('.main');
const today = document.querySelector(".today-button");
const inbox = document.querySelector(".inbox-button");
const thisWeek = document.querySelector(".this-week-button");

//Creating the dom elements to be displayed in the various tabs
const todayDom = document.createElement('div');
const thisWeekDom = document.createElement('div');
const inboxDom = document.createElement('div');

todayDom.innerHTML += `
    <h2>Today</h2>
    <div class="item-container">
`

thisWeekDom.innerHTML += `
    <h2>This Week</h2>
    <div class="item-container">
`

inboxDom.innerHTML += `
    <h2>Inbox</h2>
    <div class="item-container">
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


