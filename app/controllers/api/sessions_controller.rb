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
            render json: ['error! username stuff'], status: 404
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: ['congratulations ur loged out dawg']
        else
            render json: ['error log out  no user stuff pls log in'], status: 404
        end

    end
end
