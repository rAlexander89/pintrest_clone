
class Api::CommentsController < ApplicationController

    def create
    comment = Comment.new(comment_params);
    if comment.save
      @comments = Comment.all
      if (params[:comment][:pin_id])
        @comments = @comments.where(pin_id: params[:comment][:pin_id])
      end
      render :index
    else
      render json: comment.errors.full_messages, status: 422 
    end
  end

  def index
    @comments = Comment.all
    render :index
  end

  def show  # Doesn't show an individual comment. Shows comments that belong to an object.
    @comments = Comment.where(pin_id: params[:pin_id])
    render :show
  end


  def update
    comment = Comment.find_by(id: params[:id]);
    if comment.update(comment_params)
      @comments = Comment.all
      if (params[:comment][:pin_id])
        @comments = @comments.where(pin_id: params[:comment][:pin_id])
      end
      render :index
    else
      render json: comment.errors.full_messages, status: 422 
    end
  end

  def destroy
    comment = Comment.find_by(id: params[:id]);
    if comment.destroy
      @comments = Comment.all
      if (params[:comment][:pin_id])
        @comments = @comments.where(pin_id: params[:comment][:pin_id])
      end
      render :index
    else
      render json: comment.errors.full_messages, status: 422 
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_txt, :user_id, :pin_id)
  end

end
