import tabsListeners, { thisWeekDom } from "./tabs";

tabsListeners();



//Check for the presence of the task inside the today and thisWeek tab before adding.
//Dont allow date modification in today and thisWeek tabs
//Think of a way to make it so that elements in the inbox are linked to their forms in today and thisWeek maybe by assigning a classname for any that get added and then calling a function to get rid of them from each tab seperately if present. Also their dates need to modified together and the checks need to be made.
//Add the projects section
//Look at the message in main.js I think the file loader that im using might be outdated
//Use this file to add the stuff to the projects



// First work on adding a classname and then removing elements based from all tabs when removed. (Ask for someone elses opinion)
// Figure out a way to make dates linked so that the tasks are properly linked between inbox and other tabs.
// Then work on adding a tab to make projects and add functionality for that



// Functions have been made for adding and removing id now how and when do we assign them?
// We only need to assign an id when the element enters the today and thisWeekDom otherwise its useless.
// So if the comparison is true. We generate a new id and add.Functions
// Then we can easily add the cross button functionality to remove all occurences of the element by using the newly made function.
// then after that what we have to do is upon date change from the inbox we can check if the other elements with the same id fall into the same tabs after modification or not. if they dont using the id name we can remove them from other tabs. 
