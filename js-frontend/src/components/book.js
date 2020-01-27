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
                   <p>${review.reviewer}</p>
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

    //form submit event handler
    handFormOnSubmit(){
        console.log('testetetrserserse')
        // return fetch(this.baseUrl, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify({ review })
        // })

        // .then(res => res.json())
        //grab the values of the book id and inputs and pass them to a post fetch to create the review in the db
    }

    //Book.renderNewBookReviewForm
    static renderNewBookReviewForm(bookId){
        //return the form html for a new book review
        //id will be used by the form submit event to identify the book the review is associated with on the back end
        const formContainer = document.findElementById(`book-${bookId}`)
        const form = document.createElement("form")
        //add book id as a form attribute
        form.innerHTML = `
            <input type="hidden" value="${bookId}
            Review: <input type="text" name="book-review-content" id="book-review-content"/><br>
            Reviewer:<input type="text" name="book-reviewer" id="book-reviewer"/><br>            
            <input type="submit" value="Add Review"/>
        `
        // add your form input HTML here
        //add form submit event handler
        //append new form to form container
        // handFormOnSubmit(bookId)
        formContainer.appendChild(form.innerHTML)

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