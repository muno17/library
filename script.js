let myLibrary = [
    {
        title: "Rafa and the Rafettes",
        author: "Rafaela",
        pages: 420,
        read: true,
    },
    {
        title: "Rafa and the Rafettes 2",
        author: "Rafaela",
        pages: 69,
        read: false,
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return title + ", " + pages + "pages, " + read;
    };
}

let bookButton = document.getElementById('bookButton');
bookButton.addEventListener('click', () => {addBookToLibrary()});


function bookDisplayer(arr) {
    let length = arr.length;

    let grid = document.getElementById('gridContainer');
    grid.innerHTML = "";

    // loop through the array and add each book to the grid
    for (let i = 0; i < length - 1; i++) {
        let newDiv = document.createElement('div');    
        let linebreak = document.createElement('br');    

        let current = arr[i];
        newDiv.innerHTML += `Title: ${current.title}`;
        newDiv.appendChild(linebreak);
        newDiv.innerHTML += `Author: ${current.author}`;
        newDiv.appendChild(linebreak);
        newDiv.innerHTML += `Pages: ${current.pages}`;      
        newDiv.appendChild(linebreak); 
        newDiv.innerHTML += `Read: ${current.read}`;

        grid.appendChild(newDiv);

    }
}

// take form fields and create new book when add book is pressed
function addBookToLibrary(book) {
    let newTitle = document.getElementById("titleid");
    let newAuthor = document.getElementById("authorid");
    let newPages = document.getElementById("pagesid");

    // create new book taking values of form fields
    let newBook = new Book;
    newBook.title = newTitle.innerHTML;
    newBook.author = newAuthor.innerHTML;
    newBook.pages = newPages.innerHTML;
    newBook.read = true;

    myLibrary.push(book);
    bookDisplayer(myLibrary);
    // run bookDisplayer after book has been added
}

// add function to proto to remove books from library


