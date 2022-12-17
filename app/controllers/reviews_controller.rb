class ReviewsController < ApplicationController

    def index 
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show 
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    private
    
    #strong params still don't work as intended...Rails only requires blog and user ids.
    def review_params
        params.permit(:comment, :rating, :blog_id, :user_id)
    end

end
