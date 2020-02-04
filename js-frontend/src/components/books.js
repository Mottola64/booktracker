class Books {
    static allBooks = []

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
        this.nameButtonSort = document.getElementById('name-button')
        this.nameButtonSort.addEventListener('click', this.sortBooks.bind(this))
    }

    compare(a, b) {
        
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;
        if (titleA > titleB) {
            comparison = 1;
        } else if (titleA < titleB) {
            comparison = -1;
        }
        return comparison;
    }
           
    static allBooks() {
        return allBooks
    }


    sortBooks() {
        const sortedBooks = this.books.sort(this.compare);
        this.renderSortedBooks(sortedBooks)
    }

    renderSortedBooks(sortedBooks) {
        this.booksContainer.innerHTML=""
        this.booksContainer.innerHTML = sortedBooks.map(book =>book.renderBook()).join('')
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

                const book = this.books.find(book => book.id === review.book.id)
                book.reviews.push(review)
       
            
            this.render()
            })
            .catch(err => console.log(err))
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
            const object = new Book(book)
            this.books.push(object)
            allBooks.push(object)
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
