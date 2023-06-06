function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return title + ", " + pages + "pages, " + read;
    }
}

let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}