class Reviews {
    constructor() {
        this.reviews = []
        this.adapter = new ReviewsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadReviews()
    }

    initBindingsAndEventListeners() {

    }

    createReview(e) {
        console.log(this)
        e.preventDefault()
        const review = {
            content: this.newReviewContent.value,
            reviewer: this.newReviewer.value,

        }


        this.adapter.createReview(review)
            .then(review => {
            this.reviews.push(new Review(review))
            
            this.render()
            })
            .catch(err => console.log(err))

    }

    fetchAndLoadReviews() {
        this.adapter
            .getReviews()
            .then(reviews => {
                reviews.forEach(book => this.reviews.push(new Review(book)))
                console.log(this.reviews)
        })
        .then(() => {
            this.render()
        }) 
    }

    render() {        
        this.reviewsContainer.innerHTML = this.reviews.map(review =>review.renderLi()).join('')
    }
}
