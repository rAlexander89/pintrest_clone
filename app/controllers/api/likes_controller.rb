class Api::LikesController < ApplicationController
    
    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else 
            render json: {error: "Like failed"}
        end
    end

    def destroy 
        @like = Like.find_by(id: params[:id])
        if @like.destroy
            render json: {msg: "Unliked"}
        else 
            render json: {msg: "Unlike failed"}
        end
    end

    private

    def like_params
        params.require(:like).permit(:liked_id, :user_id, :type_liked)
    end

end
