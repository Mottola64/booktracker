class ReviewsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/reviews'
    }

    getReviews() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createReview(review) {
    
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ review })
        })
        .then(res => res.json())
        
    }
}

