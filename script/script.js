let myLibrary = [];

let booksTable = document.querySelector('#booksTable');

//newBook(0, 'In Search of Lost Time', 'Marcel Prouse', 1024, false);

function Book(id, title, author, pages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

let newBtn = document.getElementById('submitNewBook');
let newBookForm = document.getElementById('newBookForm');


newBookForm.addEventListener('submit', () => {

    const titleNew = document.getElementById('newTitle');
    const authorNew = document.getElementById('newAuthor');
    const pageNew = document.getElementById('newPage');
    const newStat = document.getElementById('newStat');

    let id = myLibrary.length;
    let title = titleNew.value;
    let author = authorNew.value;
    let pages = parseInt(pageNew.value);
    let isRead = newStat.checked;
    newBook(id,title,author,pages,isRead);
    newCard(id,title,author,pages,isRead);
})

function newCard(id,title,author,pages,isRead) {
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPage = document.createElement('div');
    const stat = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const del = document.createElement('div');
    const button = document.createElement('button');
 
    bookTitle.innerHTML = title;
    bookAuthor.innerHTML = author;
    bookPage.innerHTML = pages + " Pages";

    card.setAttribute('id', id);
    card.classList.add('card');
    bookTitle.classList.add('bookTitle');
    bookAuthor.classList.add('bookAuthor');
    bookPage.classList.add('bookPage');
    stat.classList.add('stat');
    del.classList.add('del');
    input.setAttribute('type','checkbox');
    input.setAttribute('name','isRead');
    input.checked = isRead;
    label.setAttribute('for','isRead');
    label.textContent = 'Have Read';
    button.textContent = 'Delete'
 
    cardContainer.appendChild(card);
    card.appendChild(bookTitle);    
    card.appendChild(bookAuthor);
    card.appendChild(bookPage);
    card.appendChild(stat);
    stat.appendChild(input);
    stat.appendChild(label);    
    card.appendChild(del);
    del.appendChild(button);

    button.addEventListener('click', () => {
        delete myLibrary[id];
        const element = document.getElementById(id);
        element.remove()
    });
}



function newBook(id,title,author,pages,isRead) {

    const booksNumber = document.getElementById('number');
    myLibrary.push(myLibrary.length);
    myLibrary[myLibrary.length - 1] = new Book  (id,title,author,pages,isRead);
    

}

function displayBooks(){

}   

//str.replace(/\s/g, '');
