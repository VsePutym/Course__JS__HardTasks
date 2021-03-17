document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const wrapper = document.querySelector('.wrapper');
    const color = document.getElementById('color');
    const change = document.getElementById('change');
    const body = document.querySelector('body');

    change.addEventListener('click', () =>{
        let newColor = color.textContent;  
        newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        body.style = `background-color: ${newColor}`;
        color.innerHTML = newColor;
    });

    wrapper.style.cssText = `
    text-align: center;
    margin-top: 150px;
    `;

    change.style.cssText = `
    font-size: 30px;
    padding: 20px;
    outline: none;
    border-radius: 20px`;

    color.style.cssText = `
    font-size: 50px;
    font-family: cursive;
    `;

});

