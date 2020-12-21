class Api::LikesController < ApplicationController
    before_action :require_login
    
    def create
        @like = Like.new(like_params)
        @like.author_id = current_user.id
        
        if @like.save
            render json: @like
            # render :show
        else

            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy

        debugger
        @like = Like.find_by(id: params[:like][:id])
        debugger
        if @like.delete
            render json: {}
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def show  # Doesn't show an individual comment. Shows comments that belong to an object.
        # debugger
        likeable_id = params[:params][:likeable_id]
        likeable_type = params[:params][:likeable_type]

        @likes = Like.where(likeable_id: likeable_id, likeable_type: likeable_type)
        render :show
    end

    private

    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id)

    end


end
