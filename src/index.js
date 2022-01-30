console.log('webpack worked');
import './style.css';

import {page1Builder} from './page1';
import {page2Test} from './page2';
//needs function to wipe DOM. 
//add event listeners on the page links
//event listeners need to wipe, then call module function
//need a on window load event, call main page/page1
console.log(page1Builder() );
page1Builder();
const pages = document.querySelectorAll('li');


pages.forEach(page => {
    page.addEventListener('click', e => {
        console.log('click works');
        console.log(e.target.innerText);
        if(e.target.innerText === 'Menu') {
            page2Test();
        }
        if(e.target.innerText === 'Home'){
            page1Builder();
        }
    })
});

