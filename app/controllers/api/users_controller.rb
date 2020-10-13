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
            remder json: @user.errors.full_messages
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
