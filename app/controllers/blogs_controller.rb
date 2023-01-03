class BlogsController < ApplicationController
    wrap_parameters format: []

    def index
        blogs = Blog.all
        render json: blogs, status: :ok
    end

    def show 
        blog = Blog.friendly.find(params[:id])
        render json: blog, status: :ok
    end

    def create
        blog = Blog.create!(blog_params)
        render json: blog, status: :created
    end

    def update
        blog = Blog.find(params[:id])
        blog.update(blog_params)
        render json: blog, status: :accepted
    end

    def destroy
        blog = Blog.find(params[:id])
        blog.destroy
        head :no_content
    end

    private

    #strong params still don't work as intended...Rails only requires tag and user ids.
    def blog_params
        params.permit(:title, :content, :user_id, :tag_id)
    end

end
