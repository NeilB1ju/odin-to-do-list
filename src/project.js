const projectContainer = document.querySelector('.projects-container');

export default class projectCreator{
    constructor(title){
        this.title = title;
    }

    createTab(){
        const project = document.createElement('button');
        project.classList.add('nav-element');
        project.classList.add('project-name');
        project.textContent = this.title;

        projectContainer.appendChild(project);
    }
}