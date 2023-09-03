import tabsListeners, { createAddTask } from './tabs';

tabsListeners();

const projectAdd = document.querySelector('.project-add');
createAddTask(projectAdd, 'project');

// Implementing mobile responsiveness
const nav = document.querySelector('.navbar');
const header = document.querySelector('.header');
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    header.removeChild(nav);
  } else {
    nav.classList.add('active');
    header.appendChild(nav);
  }
});

function hideNavbar() {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
    document.body.appendChild(nav);
  }
}

window.addEventListener('resize', hideNavbar);
