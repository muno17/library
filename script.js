let myLibrary = [
    // {
    //     title: "Rafa and the Rafettes",
    //     author: "Rafaela",
    //     pages: 420,
    //     read: true,
    // },
    // {
    //     title: "Rafa and the Rafettes 2",
    //     author: "Rafaela",
    //     pages: 69,
    //     read: false,
    // },
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
bookButton.addEventListener('click', () => {
    addBookToLibrary();
    bookDisplayer(myLibrary);
    document.getElementById('newBookForm').reset();
});




function bookDisplayer(arr) {
    let length = arr.length;

    let grid = document.getElementById('gridContainer');
    grid.innerHTML = "";

    // loop through the array and add each book to the grid
    for (let i = 0; i < length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('bookCard');    
        let linebreak = document.createElement('br');    

        let current = arr[i];
        if (current === undefined) continue;

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

// remove form submit default setting
let form = document.getElementById('newBookForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

// take form fields and create new book when add book is pressed
function addBookToLibrary(book) {

    let newTitle = document.getElementById("titleid").value;
    let newAuthor = document.getElementById("authorid").value;
    let newPages = document.getElementById("pagesid").value;
    let switchInfo= document.getElementById("readSwitch");

    // add book if all fields are valid
    if (newTitle && newAuthor && newPages){
        // create new book taking values of form fields
        let newBook = new Book;
        newBook.title = newTitle;
        newBook.author = newAuthor;
        newBook.pages = newPages;
        newBook.read = true;

        if (newBook.title != undefined) {
            myLibrary.push(newBook);
        }
    }
    // run bookDisplayer after book has been added
}

// figure out how to add switch info to Book
// add function to proto to remove books from library
// add function to change read status
