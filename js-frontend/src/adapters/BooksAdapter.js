class BooksAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/books'
    }

    getBooks() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}

adapter = new BooksAdapter()

const books = adapter.getBooks()