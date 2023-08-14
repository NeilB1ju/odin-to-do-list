import circleIcon from './images/circle-outline.svg'
import crossIcon from './images/close.svg'
import circleCheckIcon from './images/check-circle-outline.svg'
import { inboxDom, todayDom, thisWeekDom } from './tabs';
import moment from 'moment';

//Used to generate a unique class name for new tasks.
let generateClassName = 1;


export default class toDoItemCreator{
    constructor(title){
        this.title = title;
    }   


    setDate(date){
        this.date = date;
    }


    isSameDay(today, inputDate) {
        return today.getFullYear() === inputDate.getFullYear() &&
        today.getMonth() === inputDate.getMonth() &&
        today.getDate() === inputDate.getDate();
    }


    isSameWeek (today, inputDate){
        const todayMoment = moment(today);
        const inputDateMoment = moment(inputDate);
        return todayMoment.isoWeek() === inputDateMoment.isoWeek();
      };


    compareDate(dateInput){
        const today = new Date();
        const inputDate = new Date(dateInput);
        if(this.isSameDay(today,inputDate)){
            this.createItemDom(todayDom, dateInput);
        }
        if(this.isSameWeek(today,inputDate)){
            this.createItemDom(thisWeekDom, dateInput);
        }
    }


    setId(domElement){
        const newId = "task-" + generateClassName;
        generateClassName+=1;
        domElement.setAttribute("id", newId);
    }


    removeItem(Id){
        inboxDom.removeChild(document.getElementById(Id));
        todayDom.removeChild(document.getElementById(Id));
        thisWeekDom.removeChild(document.getElementById(Id));
    }


    createItemDom(domElement, date){
        const itemContainer = domElement.childNodes[3];

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        const taskTitle = document.createElement('p');
        taskTitle.innerHTML = this.title;


        const imageButton1 = document.createElement('button');
        imageButton1.classList.add('image-button');
        const circleImg = document.createElement('img');
        circleImg.src = circleIcon; 
        circleImg.classList.add('circle');
        imageButton1.appendChild(circleImg);

        //Functionality for the circle button
        imageButton1.addEventListener('click', () => {
            //Creating a 's' element to strike through the text
            const strike = document.createElement('s');
            strike.classList.add('strike');

            if(circleImg.classList.contains('circle')){
                circleImg.src = circleCheckIcon;
                circleImg.classList.remove('circle');
                circleImg.classList.add('checked-circle');
                leftContainer.removeChild(taskTitle);
                strike.appendChild(taskTitle);
                leftContainer.appendChild(strike);            }

            else{
                circleImg.src = circleIcon;
                circleImg.classList.add('circle');
                circleImg.classList.remove('checked-circle');
                leftContainer.removeChild(document.querySelector('.strike'));
                leftContainer.appendChild(taskTitle);
            }
        })
        
        
        const imageButton2 = document.createElement('button');
        imageButton2.classList.add('image-button');
        const crossImg = document.createElement('img');
        crossImg.src = crossIcon;
        imageButton2.appendChild(crossImg);

        //Functionality for the cross button
        imageButton2.addEventListener('click', () => {
            itemContainer.removeChild(taskContainer);
        });

        
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('date-input');
        const dateButton = document.createElement('button');
        dateButton.classList.add('date-button');
        dateButton.innerHTML = "Add Date";

        //This is used to check if the function is being called for a new item or a item that has already been made and needs to be placed into the today and thisWeek tabs on date modification.
        //Items that are in the today and thisWeek tabs cannot have their date modified.
        if(date === null){
             //Functionality to add/modify a date
            dateButton.addEventListener('click', () => {
                rightContainer.replaceChild(dateInput,dateButton);
            })

            //Functionality to display the date that has been inputted
            dateInput.addEventListener('input', () => {
                dateButton.innerHTML = dateInput.value;
                this.setDate(dateInput.value);
                this.compareDate(dateInput.value);
                rightContainer.replaceChild(dateButton,dateInput);
            });
        }

        else{
            dateButton.innerHTML = date;
        }


        const leftContainer = document.createElement('div');
        leftContainer.classList.add('left-container');
        leftContainer.appendChild(imageButton1);
        leftContainer.appendChild(taskTitle);

        const rightContainer = document.createElement('div');
        rightContainer.classList.add('right-container');
        rightContainer.appendChild(dateButton);
        rightContainer.appendChild(imageButton2);

        taskContainer.appendChild(leftContainer);
        taskContainer.appendChild(rightContainer);
        itemContainer.appendChild(taskContainer);
    }
}