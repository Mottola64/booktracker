class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render json: @reviews, status: 200
    end

    def show

        @review = Review.find(params[:id])

        render json: @review, status: 200
    end    

    def create
        @review = Review.create(review_params)
        render json: @review, include: [:book], status: 200
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render json: ("This review was deleted successfully.").to_json
    end


    private
    def review_params
        params.require(:review).permit(:content, :reviewer, :book_id)
    end


end
