

const form = document.querySelector('.newBook');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const cardDiv = document.querySelector('.cardContainer');

// form.addEventListener('submit', addBookToLibrary);


class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}



function addBookToLibrary(e) {
    e.preventDefault();
    const card = document.createElement('div');
    const del = document.createElement('img');
    del.className = 'delete';
    del.src = 'trash.svg';
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

//error/validation handling

form.addEventListener('submit', (e) => {
    if (!inputTitle.validity.valid) {
        e.preventDefault();
        showError();
    } else if (!inputAuthor.validity.valid) {
        e.preventDefault();
        showError();
    } else if (!inputPages.validity.valid) {
        e.preventDefault();
        showError();
    }
    else {
        addBookToLibrary(e);
    }
})

inputTitle.addEventListener('input', (e) => inputTitle.className = '');
inputAuthor.addEventListener('input', (e) => inputAuthor.className = '');
inputPages.addEventListener('input', (e) => inputPages.className = '')

function showError() {
    if (!inputTitle.validity.valid) {
        inputTitle.className = 'error'
        console.log('need title')
    } else if (!inputAuthor.validity.valid) {
        inputAuthor.className = 'error'
        console.log('need author')
    } else if (!inputPages.validity.valid) {
        console.log('need pages')
        inputPages.className = 'error'
    }
    else {
        
    }
}