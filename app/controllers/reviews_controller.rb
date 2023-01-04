class ReviewsController < ApplicationController
    wrap_parameters format: []

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
    
    def review_params
        params.permit(:comment, :rating, :blog_id, :user_id)
    end

end
