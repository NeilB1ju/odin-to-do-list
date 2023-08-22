import tabsListeners, { createAddTask } from "./tabs";

tabsListeners();

const projectAdd = document.querySelector('.project-add');
createAddTask(projectAdd, "project");


//Implementing mobile responsiveness
const nav = document.querySelector('.navbar');
const navCopy = nav.cloneNode(true);
const header = document.querySelector('.header');
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', () =>{
    if(navCopy.classList.contains('active')){
        navCopy.classList.remove('active');
        header.removeChild(navCopy);
    }
    else{
        navCopy.classList.add('active');
        header.appendChild(navCopy);
    }
})