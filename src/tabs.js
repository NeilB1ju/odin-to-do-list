const main = document.querySelector('.main');
const today = document.querySelector(".today-button");
const inbox = document.querySelector(".inbox-button");
const thisWeek = document.querySelector(".this-week-button");

//Creating the dom elements to be displayed in the various tabs
const todayDom = document.createElement('div');
const todayDomText = document.createElement('h2');
todayDomText.textContent = "Today"; 
todayDom.appendChild(todayDomText);

const thisWeekDom = document.createElement('div');
const thisWeekDomText = document.createElement('h2');
thisWeekDomText.textContent = "This Week";
thisWeekDom.appendChild(thisWeekDomText);

const inboxDom = document.createElement('div');
const inboxDomText = document.createElement('h2');
inboxDomText.textContent = "Inbox";
inboxDom.appendChild(inboxDomText);


//Adding functionality to the tabs
export default function tabsListeners() {
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
    if(main.childNodes.length != 0){
        main.removeChild(main.childNodes[0]); 
    }
}


