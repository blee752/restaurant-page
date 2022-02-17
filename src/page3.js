function page3Builder() {
    //reference to the DOM
    const content = document.querySelector('.content');
    content.replaceChildren();

    //header
    const headerDiv = document.createElement('div');
    const list = document.createElement('ul');
    const listNames = ['Home', 'Menu', 'Contact'];

    for (let i = 0; i < 3; i++) {
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

    const title = document.createElement('h1');
    title.innerText = 'Contact Us';
    title.classList.add('content-container');
    contentDiv.appendChild(title);

    const addrDiv = document.createElement('div');
    
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    const mapFanicon = document.createElement('i');
    const mapAddress = document.createElement('p');

    mapFanicon.classList.add('fas',  'fa-map-marker-alt')
    mapAddress.innerText = '7372 Riverside Ave. Richardson, TX 75080';

    locationDiv.append(mapFanicon, mapAddress);
    addrDiv.appendChild(locationDiv);
    addrDiv.classList.add('address');

    const numberDiv = document.createElement('div');
    const numberFanicon = document.createElement('i');
    const numberInfo = document.createElement('p');

    numberFanicon.classList.add('fas', 'fa-phone')
    numberInfo.innerText = `(111)-231-4234`;

    numberDiv.append(numberFanicon, numberInfo);
    numberDiv.classList.add('number');
    contentDiv.append(addrDiv, numberDiv);
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

export { page3Builder };