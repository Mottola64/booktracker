class BooksAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/books'
    }

    getBooks() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createBook(bookTitle) {
        const book = {
            title: bookTitle,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            title: JSON.stringify({ book })
        })
    }
}

