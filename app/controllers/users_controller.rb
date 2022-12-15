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
        render json: user, status: :created
    end

    private
    #strong params still don't work as intended...Rails only requires password.
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :avatar)
    end
end
