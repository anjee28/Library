let myLibrary = [];

let booksTable = document.querySelector('#booksTable');

//Book
function Book(id, title, author, pages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

let newBtn = document.getElementById('submitNewBook');
let newBookForm = document.getElementById('newBookForm');

//New Book Form - Getting Data from Form
newBookForm.addEventListener('submit', () => {

    const titleNew = document.getElementById('newTitle');
    const authorNew = document.getElementById('newAuthor');
    const pageNew = document.getElementById('newPage');
    const newStat = document.getElementById('newStat');

    let id = generateId();
    let title = titleNew.value;
    let author = authorNew.value;
    let pages = parseInt(pageNew.value);
    let isRead = newStat.checked;
    newBook(id,title,author,pages,isRead);
})


function generateId() {

    let lastId = 0;

    for(i = 0; i < myLibrary.length; i++) {
        
        if(myLibrary[i].id === undefined)
        {
            lastId = 0;
        }
        else {
            lastId = myLibrary[i].id;
        }

    }
    return (lastId + 1);
}

//Cards Generation - Dislplay Cards
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
        
        const index = myLibrary.findIndex(object => {
            return object.id === 3;
        });
        
        myLibrary.splice(index, 1);
        const element = document.getElementById(id);
        element.remove();
    });

}

//Card Generation - Generate Cards from myLibrary Array
function generateCards(){

    const elements = document.getElementsByClassName('card');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    for(i = 0; i < myLibrary.length; i++){

        
        let id = myLibrary[i].id;
        let title = myLibrary[i].title;
        let author = myLibrary[i].author;
        let pages = myLibrary[i].pages;
        let isRead = myLibrary[i].isRead;
        newCard(id,title,author,pages,isRead);
    }
}

//Sample Book Generation
sampleBook();

function sampleBook() {
    let id = myLibrary.length;
    let title = 'Sample Book Title';
    let author = 'Sample Book Author';
    let pages = parseInt(1232);
    let isRead = newStat.checked;
    newBook(id,title,author,pages,isRead);
}
 
function newBook(id,title,author,pages,isRead) {

    const booksNumber = document.getElementById('number');
    myLibrary.push(myLibrary.length);
    myLibrary[myLibrary.length - 1] = new Book  (id,title,author,pages,isRead);
    generateCards();

}

function displayBooks(){

}   

