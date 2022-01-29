console.log('webpack worked');
import './style.css';

//needs function to wipe DOM. 
//add event listeners on the page links
//event listeners need to wipe, then call module function
//need a on window load event, call main page/page1

const pages = document.querySelectorAll('li');


pages.forEach(page => {
    page.addEventListener('click', e => {
        console.log('click works');
        console.log(e.target.innerText);
    })
});