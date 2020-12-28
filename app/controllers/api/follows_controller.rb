class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(user_params)
        @follow.save
        render :show
    end

    def destroy
        @follow = Follow.find_by(id: params[:id])
        if @follow.destroy
            render json: {msg: "destroyed"}
        else 
            render json: {msg: "failed to destroy"}
        end
    end

    def index 
        @follows = Follow.all
        render :index
    end

    
    private

    def user_params
        params.require(:follow).permit(:follower_id, :followee_id)
    end

end
