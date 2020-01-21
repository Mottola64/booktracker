class Book {
    constructor(bookJSON) {
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.genre = bookJSON.genre
    }
}