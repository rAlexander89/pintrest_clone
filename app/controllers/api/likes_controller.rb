class Api::LikesController < ApplicationController
    before_action :require_login
    
    def create
        debugger
        @like = Like.new(like_params)
        @like.author_id = current_user.id
        debugger
        
        if @like.save
            render :show
        else
            debugger
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like.destroy
            render json: {}
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def show  # Doesn't show an individual comment. Shows comments that belong to an object.
        # debugger
        # debugger
        @like = Like.where(likeable_id: params[:likeable_id])
        # debugger
        render :show
    end

    private

    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id)
    end


end
