class Books {
    constructor() {
        this.books = []
        this.bookAdapter = new BooksAdapter()
        this.reviewAdapter = new ReviewsAdapter()
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
        this.booksContainer.addEventListener('click', this.handleNewReviewClick)
        this.booksContainer.addEventListener('submit', this.handleFormOnSubmit.bind(this))
    }

    //form submit event handler
    handleFormOnSubmit(e){
        e.preventDefault()
        const review = {
            content: event.target.querySelector('#book-review-content').value,
            reviewer: event.target.querySelector('#book-reviewer').value,
            book_id: event.target.getAttribute('data-book-id')
        }

        this.reviewAdapter.createReview(review)
            .then(review => {

                //you'll should then have review.book.id 
                //google how to find object by attribute value
                //filter or find maybe? 
                const book = this.books.find(book => book.id === review.book.id)
                book.reviews.push(review)
        
                //once you find the corresponding book, push the new review into it's reviews array
                //rerender it all
            
            this.render()
            })
            .catch(err => console.log(err))
        //grab the values of the book id and inputs and pass them to a post fetch to create the review in the db
    }


    createBook(e) {
        console.log(this)
        e.preventDefault()
        const book = {
            title: this.newBookTitle.value,
            author: this.newBookAuthor.value,
            genre: this.newBookGenre.value
        }


       this.bookAdapter.createBook(book)
            .then(book => {
            this.books.push(new Book(book))
            
            this.render()
            })
            .catch(err => console.log(err))

    }

    handleNewReviewClick(e) {

        if (e.target.className === 'new-review-button'){
            const str = e.target.id
            const bookId = str.split('_')[2];
            Book.renderNewBookReviewForm(bookId);
        }

        //does the e.target have the new-review-button class name?? only respond if it does
        // take the book id value from the button
        // call the render Book.renderForm function and pass it the book id
    }

    fetchAndLoadBooks() {
        this.bookAdapter
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
