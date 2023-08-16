import tabsListeners, { createAddTask } from "./tabs";

tabsListeners();

const projectAdd = document.querySelector('.project-add');
createAddTask(projectAdd, "project");
//Add functionality for this by editing the createAddTask function.