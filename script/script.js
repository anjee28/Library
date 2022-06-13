let myLibrary = [];

let booksTable = document.querySelector('#booksTable');

newBook(0, 'In Search of Lost Time', 'Marcel Prouse', 1024, false);

function Book(id, title, author, pages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

let newBtn = document.getElementById('newBook');

newBtn.addEventListener('click', () => {

    let id = myLibrary.length;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let isRead = document.getElementById('isRead').checked;
    newBook(id,title,author,pages,isRead);
    
})

function newBook(id,title,author,pages,isRead) {

    const booksNumber = document.getElementById('number');
    myLibrary.push(myLibrary.length);
    myLibrary[myLibrary.length - 1] = new Book  (id,title,author,pages,isRead);
    
    booksNumber.innerHTML = myLibrary[myLibrary.length - 1].title;
}

function displayBooks(){

}

//str.replace(/\s/g, '');