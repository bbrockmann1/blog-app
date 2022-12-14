class UsersController < ApplicationController
    wrap_parameters format: []

    def index
        users = User.all
        render json: users, stastus: :ok
    end

    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private
    
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :avatar)
    end

end
