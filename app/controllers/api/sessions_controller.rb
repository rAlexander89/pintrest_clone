class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/show.json.jbuilder'
        else
            render json: ['Incorrect login info!'], status: 401
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: ['You have been logged out.']
        else
            render json: ['Error Logging out.'], status: 404
        end
    end
end
