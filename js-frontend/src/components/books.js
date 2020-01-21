class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadBooks()
    }

    initBindingsAndEventListeners() {
        this.booksContainer = document.getElementById('books-container')
        this.title = document.querySelector('form')
        this.newBookTitle = document.getElementById('new-book-title')
        this.author = document.querySelector('author')
        this.newBookAuthor = document.getElementById('new-book-author')
        this.genre = document.querySelector('genre')
        this.newBookGenre = document.getElementById('new-book-genre')
        this.bookForm = document.getElementById('new-book-form')
        this.bookForm.addEventListener('submit', this.createBook.bind(this))
    
    }

    createBook(e) {
        console.log(this)
        e.preventDefault()
        const bookTitle = this.newBookTitle.value

        this.adapter.createBook(bookTitle)

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
        this.booksContainer.innerHTML = this.books.map(book =>book.renderLi()).join('')
    }
}
