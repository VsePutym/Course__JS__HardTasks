'use strict';

let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

let thisDay = new Date();

const days = document.querySelector('.days');
const createUl = document.createElement('ul');
const monday = document.createElement('li');
const tuesday = document.createElement('li');
const wednesday = document.createElement('li');
const thursday = document.createElement('li');
const friday = document.createElement('li');
const saturday = document.createElement('li');
const sunday = document.createElement('li');
const thisD = document.createElement('li');

createUl.classList.add('ul__class');
monday.classList.add('monday');
tuesday.classList.add('tuesday');
wednesday.classList.add('wednesday');
thursday.classList.add('thursday');
friday.classList.add('friday');
saturday.classList.add('saturday');
sunday.classList.add('sunday');
thisD.classList.add('thisDay');

days.insertAdjacentElement('beforeend', createUl);
createUl.insertAdjacentElement('afterbegin', friday);
createUl.insertAdjacentElement('afterbegin', thursday);
createUl.insertAdjacentElement('afterbegin', wednesday);
createUl.insertAdjacentElement('afterbegin', tuesday);
createUl.insertAdjacentElement('afterbegin', monday);
createUl.insertAdjacentElement('beforeend', saturday);
createUl.insertAdjacentElement('beforeend', sunday);
createUl.insertAdjacentElement('beforeend', thisD);

saturday.style.fontStyle = 'italic';
sunday.style.fontStyle = 'italic';
thisD.style.fontWeight = 'bold';

monday.innerHTML = week[0];
tuesday.innerHTML = week[1];
wednesday.innerHTML = week[2];
thursday.innerHTML = week[3];
friday.innerHTML = week[4];
saturday.innerHTML = week[5];
sunday.innerHTML = week[6];
thisD.innerHTML = thisDay;
