function page2Builder() {
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
    title.innerText = 'Menu';

    contentDiv.appendChild(title);


    //move this to the for loop under if food descriptions are added later.
    //Currently just using the same lorium text for all items

    const priceArray = ['60$', '50$', '35$', '25$', '30$', '60$'];
    const menuArray = ['Bucatini with Lemony Carbonara', 'Cacio e Pepe', 'Lasagna Bolognese', 'Mushroom Carbonara', 'Pasta all Anatriciana', 'Elena Apres Pizza al Taglio'];

    for (let i = 0; i < 6; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('item-description');

        let itemName = document.createElement('h2');
        itemName.innerText = menuArray[i];

        let price = document.createElement('p');
        price.innerText = priceArray[i];

        let foodDescription = document.createElement('p');
        foodDescription.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        let underline = document.createElement('span');
        underline.classList.add('underline');


        descriptionDiv.append(foodDescription, underline, price);
        itemDiv.append(itemName, descriptionDiv);
        contentDiv.appendChild(itemDiv);
    }
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

export { page2Builder };