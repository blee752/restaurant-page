//function to build main page

function page1Builder() {
//reference to the DOM
const content = document.querySelector('.content');
content.replaceChildren();

//header
const headerDiv = document.createElement('div');
const list = document.createElement('ul');
const listNames = [ 'Home', 'Menu', 'Contact'];

for (let i =0; i < 3; i++) {
        let listChild = document.createElement('li');
        listChild.innerText = listNames[i];
        list.appendChild(listChild);
    }

headerDiv.classList.add('header');
list.classList.add('nav')
headerDiv.appendChild(list);
content.appendChild(headerDiv);

//main content
const contentDiv = document.createElement('div');
contentDiv.classList.add('content-container');

const aboutDiv = document.createElement('div');
aboutDiv.classList.add('about');
const title = document.createElement('h1');
title.innerText = 'Bello Italiano';
const aboutDesc = document.createElement('h2');
aboutDesc.innerText = 'About Us';
const desc = document.createElement('p');
desc.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

//time section
const timeOfOperation = document.createElement('div');
const operationHeader = document.createElement('h2');
const timeList = document.createElement('ul');
const timeDates = ['Sunday: 10am - 2am', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Friday: 10am - 2am', 'Saturday: 10am - 2am']

for(let i = 0; i < timeDates.length; i++) {
    let day = document.createElement('li');
    day.innerText = timeDates[i];
    timeList.appendChild(day);
}

operationHeader.innerText = 'Hours of Operation';
timeList.classList.add('hours');
timeOfOperation.classList.add('operation');

timeOfOperation.append(operationHeader, timeList);
aboutDiv.append(aboutDesc, desc);
contentDiv.append(title, aboutDiv, timeOfOperation);
content.appendChild(contentDiv);






//footer
const footerDiv = document.createElement('div');
const author = document.createElement('h3');
const gitLink = document.createElement('a');
const gitIcon = document.createElement('i');

author.innerText = 'Made by blee752';
gitLink.href = 'https://github.com/blee752';

footerDiv.classList.add('footer');
gitIcon.classList.add('fab', 'fa-github');

gitLink.appendChild(gitIcon);
footerDiv.append(author, gitLink);

content.appendChild(footerDiv);
}
export {page1Builder};