import { changeActive, createAddTask, inbox, inboxDom } from "./tabs";
import crossIcon from './images/close.svg';
import projectIcon from './images/developer-board.svg'

const projectContainer = document.querySelector('.projects-container');
const main = document.querySelector('.main');


export default class projectCreator{
    constructor(title){
        this.title = title;
    }

    //Creates a project button in the nav bar 
    createTab(){
        const project = document.createElement('button');
        project.classList.add('nav-element');
        project.setAttribute('data-task', this.title);
        const projectName = document.createElement('p');
        projectName.classList.add('project-name');
        projectName.textContent = this.title;
        const projectImg = document.createElement('img');
        projectImg.src = projectIcon;
        project.appendChild(projectImg);
        project.appendChild(projectName);

        const projectDom = this.createTabDom();
        createAddTask(projectDom, "task");

        project.addEventListener('click', ()=>{
            changeActive();
            project.classList.add('active');
            main.appendChild(projectDom);
        });

        projectContainer.appendChild(project);
    }


    //Creates the dom for the project in the main section of the website.
    createTabDom(){
        const projectDom = document.createElement('div');
        
        const projectNameContainer = document.createElement('div');
        projectNameContainer.classList.add('project-name-container');

        const projectName = document.createElement('h2');
        projectName.textContent = this.title;

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const imageButton = document.createElement('button');
        imageButton.classList.add('image-button');
        const crossImg = document.createElement('img');
        crossImg.src = crossIcon;
        imageButton.appendChild(crossImg);
        imageButton.addEventListener('click',()=>{        
            for(let i=0; i<projectContainer.childNodes.length; i++){
                const childElement = projectContainer.childNodes[i];
                const taskName = childElement.getAttribute('data-task');
                if(taskName == this.title){
                    projectContainer.removeChild(childElement);
                }
            }

            while (main.firstChild) {
                main.removeChild(main.lastChild);
            }

            inbox.classList.add('active');
            main.appendChild(inboxDom);
        });

        projectNameContainer.appendChild(projectName);
        projectNameContainer.appendChild(imageButton);

        projectDom.appendChild(projectNameContainer);
        projectDom.appendChild(itemContainer);
        projectDom.setAttribute('data-task', this.title);
        return projectDom;
    }
}