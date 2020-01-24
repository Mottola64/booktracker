class Reviews {
    constructor() {
        this.reviews = []
        this.adapter = new ReviewsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadReviews()
    }

    initBindingsAndEventListeners() {
        this.reviewsContainer = document.getElementById('reviews-container')
        this.bookForm = document.getElementById('new-book-form')
        this.bookForm.addEventListener('submit', this.createBook.bind(this))
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
            this.Reviews.push(new Book(book))
            
            this.render()
            })
            .catch(err => console.log(err))

    }

    fetchAndLoadReviews() {
        this.adapter
            .getReviews()
            .then(Reviews => {
                Reviews.forEach(book => this.Reviews.push(new Book(book)))
                console.log(this.Reviews)
        })
        .then(() => {
            this.render()
        }) 
    }

    render() {        
        this.ReviewsContainer.innerHTML = this.Reviews.map(book =>book.renderLi()).join('')
    }
}
