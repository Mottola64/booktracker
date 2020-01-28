class Book {
    constructor(bookJSON) {
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.genre = bookJSON.genre
        this.reviews = bookJSON.reviews
    }

    renderBookReviews(){
        return `
            <ul>${this.reviews.map(review => {
                return `
                   <p>${review.content}</p>
                   <ul>${review.reviewer}</ul>
                `
            }).join('')}</ul>
            `
    }

    renderLi() {
        return `<ul>
                    <li>${this.author}</li>
                    <li>${this.genre} </li>
                </ul>`
    }

    renderTitle(){
        return `<h3>${this.title}</h3>`
    }

    renderNewReviewButton(){
        return `
            <button class="new-review-button" id="new_review_${this.id}">Add Review</button>
        `
    }

    static renderNewBookReviewForm(bookId) {
        //return the form html for a new book review
        //id will be used by the form submit event to identify the book the review is associated with on the back end
        const formContainer = document.getElementById(`book-${bookId}`)
        const form = document.createElement("form")
        form.setAttribute('data-book-id', bookId)
        //add book id as a form attribute
        form.innerHTML = `
            Review: <input type="text" name="book-review-content" id="book-review-content"/><br>
            Reviewer:<input type="text" name="book-reviewer" id="book-reviewer"/><br>            
            <input type="submit" value="Submit Review"/>
        `
        // add your form input HTML here
        //add form submit event handler
        //append new form to form container
        
        formContainer.appendChild(form)
    }

    renderBook(){
        
        return `
            <div id="book-${this.id}">
                ${this.renderTitle()}
                ${this.renderLi()}
                ${this.renderBookReviews()}
                ${this.renderNewReviewButton()}
            </div>
        `
    }


}