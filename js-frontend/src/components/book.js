class Book {
    constructor(bookJSON) {
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.genre = bookJSON.genre
    }

    renderLi() {
        return `<li><b>${this.title}</b></li>
                    <ul>${this.author}</ul>
                    <ul>${this.genre} </ul>`
    }
}