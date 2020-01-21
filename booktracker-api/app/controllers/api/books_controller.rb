class Api::BooksController < ApplicationController

    def index
        
        @books = Book.all

        render json: @books, status: 200
    end

    def show

        @book = Book.find(params[:id])

        render json: @book, status: 200
    end    

    def create        
        @book = Book.create(book_params)

        render json: @book, status: 200
    end

    def update
        @book = Book.find(params[:id])
        @book.update(book_params)

        render json: @book, status: 200
    end

    def destroy
        @book = Book.find(params[:id])
        @book.delete

        render json: {bookId: @book.id}

    end

    private
        def book_params
            params.require(:book).permit!
        end


end
