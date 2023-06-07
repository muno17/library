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

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let bookButton = document.getElementById('bookButton');
bookButton.addEventListener('click', addBookToLibrary());


function bookDisplayer(arr) {
    let length = arr.length;

    let grid = document.getElementById('gridContainer');

    // loop through the array and add each book to the grid
    for (let i = 0; i < length; i++) {
        let newDiv = document.createElement('div');    
        let linebreak = document.createElement('br');    

        let current = arr[i];
        newDiv.innerHTML += `Title: ${current.title}`;
        newDiv.appendChild(linebreak) ;
        newDiv.innerHTML += `Author: ${current.author}`;
        newDiv.appendChild(linebreak);
        newDiv.innerHTML += `Pages: ${current.pages}`;      
        newDiv.appendChild(linebreak); 
        newDiv.innerHTML += `Read: ${current.read}`;

        grid.appendChild(newDiv);

    }
}

