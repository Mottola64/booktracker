class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadBooks()
    }

    fetchAndLoadBooks() {
        this.adapter
            .getBooks()
            .then(books => {
                books.forEach(book => this.books.push(new Book(book)))
                console.log(this.books)
        })
        .then(() => {
            this.render()
        }) 
    }

    render() {
        const booksContainer = document.getElementById('books-container')
        booksContainer.innerHTML = 'books here'
    }
}
