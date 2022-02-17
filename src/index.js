console.log('webpack worked');
import './style.css';
import mushroomCarb from './images/mushroom-carbonara.jpg';
import amatricianaPasta from './images/pasta-all-amatriciana.jpg';
import cacio from './images/cacio-e-pepe.jpg';
import bucatini from './images/bucatini-with-lemony-carbonara.jpg';
import bolognese from './images/lasagna-bolognese.jpg';
import pizza from './images/1219-Elena-Apres-Pizza-al-Taglio-With-Onion-5.jpg';


import { page1Builder } from './page1';
import { page2Builder } from './page2';
import { page3Builder } from './page3';
//needs function to wipe DOM. 
//add event listeners on the page links
//event listeners need to wipe, then call module function
//need a on window load event, call main page/page1

window.onload = function () {
    console.log('shouldnt run page 1');
    page1Builder();
    addHeaderEvents();

};

console.log(mushroomCarb);

function addHeaderEvents() {
    const pages = document.querySelectorAll('li');


    pages.forEach(page => {
        page.addEventListener('click', e => {
            console.log('click works');
            console.log(e.target.innerText);
            if (e.target.innerText === 'Menu') {
                page2Builder();
            }
            else if (e.target.innerText === 'Home') {
                page1Builder();
            }
            else {
                page3Builder();
            }
            addHeaderEvents();
        })
    });

}
