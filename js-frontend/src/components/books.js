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
        // this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
        this.booksContainer.addEventListener('click', this.handleNewReviewClick)
        this.bookReviewContent = document.getElementById('book-review-content')
        this.bookReviewer = document.getElementById('book-reviewer')
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

    createReview(e) {
        console.log(this)
        e.preventDefault()
        const review = {
            content: this.bookReviewContent.value,
            reviewer: this.bookReviewer.value
        }


        this.adapter.createReview(review)
            .then(review => {
            this.reviews.push(new Book(review))
            
            this.render()
            })
            .catch(err => console.log(err))

    }

    
    handleNewReviewClick(e) {

        if (e.target.className === 'new-review-button'){
            const str = e.target.id
            const bookId = str.split('_')[2];
            Book.renderNewBookReviewForm(bookId);

            // console.log(bookId);
        }
        else
            {console.log('error')}
        //does the e.target have the new-review-button class name?? only respond if it does
        // take the book id value from the button
        // call the render Book.renderForm function and pass it the book id
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
        this.booksContainer.innerHTML = this.books.map(book =>book.renderBook()).join('')
    }
}
