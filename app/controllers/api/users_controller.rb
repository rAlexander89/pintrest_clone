class Api::UsersController < ApplicationController
    
    def new 
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
            # render json: ['error! sign up stuff'], status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
