

const form = document.querySelector('.newBook');
const cardDiv = document.querySelector('.cardContainer');

form.addEventListener('submit', addBookToLibrary);







function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}



function addBookToLibrary(e) {
    e.preventDefault();
    const card = document.createElement('div');
    const del = document.createElement('button');
    del.className = 'delete';
    del.textContent = 'DELETE';
    card.className = 'card';
    cardDiv.appendChild(card);
    const newBook = new Book(e.target.title.value, e.target.author.value, e.target.pages.value, e.target.read.value);
    for (const item in newBook) {
        card.appendChild(createCard(newBook[item]));
    };
    card.appendChild(del);

    let deleteButton = document.querySelectorAll('.delete');
    console.log(deleteButton);
    deleteButton.forEach((item) => {
        item.addEventListener('click', deleteItem);
    });
}

function createCard(item) {
    let cardItem = document.createElement('div');
    cardItem.textContent = item;
    return cardItem;
}

function deleteItem(e) {
    console.log(e);
    e.target.parentNode.remove();
}