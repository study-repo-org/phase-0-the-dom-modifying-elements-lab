// Write your code here!

const mainElement = document.querySelector('#main');
mainElement.remove();

// Created <h1> element
const newHeader = document.createElement('h1');

//and  Set the element with an id of  'victory'
newHeader.id = 'victory';

// last added a text to the <h1> element
newHeader.textContent = "Mohamed is the champion"; 
