class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadBooks()
    }

    initBindingsAndEventListeners() {
        this.booksContainer = document.getElementById('books-container')
        this.newBookTitle = document.getElementById('new-book-title')
        this.newBookAuthor = document.getElementById('new-book-author')
        this.newBookGenre = document.getElementById('new-book-genre')
        this.bookForm = document.getElementById('new-book-form')
        this.bookForm.addEventListener('submit', this.createBook.bind(this))
        this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
    }

    createBook(e) {
        console.log(this)
        e.preventDefault()
        const book = {
            title: this.newBookTitle.value,
            author: this.newBookAuthor.value,
            genre: this.newBookGenre.value
        }


        this.adapter.createBook(book)
            .then(book => {
            this.books.push(new Book(book))
            
            this.render()
            })
            .catch(err => console.log(err))

    }

    handleBookClick(e) {
        console.log(e.target)
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
