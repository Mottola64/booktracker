class Review {
    constructor(reviewJSON) {
        this.id = reviewJSON.id
        this.content = reviewJSON.review
        this.reviewer = reviewJSON.reviewer

    }

    renderLi() {
        return `<li>${this.content}</li>
                    <ul>${this.reviewer}</ul>`
    }
}