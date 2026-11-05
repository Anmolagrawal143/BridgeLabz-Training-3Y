/**
 * Q3: Library Management System (Classes + Objects)
 * Manages book records, issue & return features, and ISBN lookups.
 */

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`[Success] '${this.title}' has been issued successfully.`);
            return true;
        } else {
            console.log(`[Notice] '${this.title}' is already issued.`);
            return false;
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`[Success] '${this.title}' has been returned to the library.`);
            return true;
        } else {
            console.log(`[Notice] '${this.title}' was not issued.`);
            return false;
        }
    }

    getDetails() {
        return `ISBN: ${this.ISBN.padEnd(14)} | Title: ${this.title.padEnd(25)} | Author: ${this.author.padEnd(18)} | Status: ${this.isIssued ? "Issued" : "Available"}`;
    }
}

const library = [
    new Book("Clean Code", "Robert C. Martin", "978-0132350884"),
    new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748"),
    new Book("Design Patterns", "Erich Gamma", "978-0201633610"),
    new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244")
];

function displayAvailableBooks(books) {
    console.log("\n=== AVAILABLE BOOKS ===");
    const available = books.filter(b => !b.isIssued);
    if (available.length === 0) {
        console.log("No books currently available.");
    } else {
        available.forEach(b => console.log(b.getDetails()));
    }
}

function issueBookByISBN(books, searchISBN) {
    console.log(`\n--- Searching ISBN: ${searchISBN} to Issue ---`);
    const book = books.find(b => b.ISBN === searchISBN);
    if (book) {
        book.issueBook();
    } else {
        console.log(`[Error] No book found with ISBN: ${searchISBN}`);
    }
}

console.log("=== Q3: LIBRARY MANAGEMENT SYSTEM ===");
displayAvailableBooks(library);
issueBookByISBN(library, "978-0596517748");
displayAvailableBooks(library);
