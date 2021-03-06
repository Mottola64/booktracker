class BooksAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/books'
    }

   getBooks() {
         return fetch(this.baseUrl).then(res => res.json())
    }

    createBook(book) {
    
        //fetch returns a promise
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ book })
        })
        //.then is called when the promise resolves 
        //the response from the database is passed as an arguement 
        .then(res => res.json())
        
    }
}

