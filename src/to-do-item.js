import circleIcon from './images/circle-outline.svg'
import crossIcon from './images/close.svg'
import circleCheckIcon from './images/check-circle-outline.svg'

export default class toDoItemCreator{
    constructor(title){
        this.title = title;
    }   

    setDate(date){
        this.date = date;
    }

    createItemDom(domElement){
        const itemContainer = document.querySelector('.item-container');

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
                console.log(rightContainer)
                rightContainer.removeChild(taskTitle);
                strike.appendChild(taskTitle);
                rightContainer.appendChild(strike);
            }

            else{
                circleImg.src = circleIcon;
                circleImg.classList.add('circle');
                circleImg.classList.remove('checked-circle');
                console.log(rightContainer)
                rightContainer.removeChild(document.querySelector('.strike'));
                rightContainer.appendChild(taskTitle);
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
        //Functionality to add a date
        dateButton.addEventListener('click', () => {
            rightContainer.replaceChild(dateInput,dateButton);
        })

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




