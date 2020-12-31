
class Api::CommentsController < ApplicationController
  before_action :require_login

  def index
    @comments = Comment.all
    render :index
  end

   def create
    comment = Comment.new(comment_params);
    if comment.save
      @comments = Comment.where(pin_id: params[:comment][:pin_id])
      render :index
    else
      render json: comment.errors.full_messages, status: 422 
    end
  end

  def show  # Doesn't show an individual comment. Shows comments that belong to an object.
    @comments = Comment.where(pin_id: params[:pin_id])
    render :index
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
      @comment = Comment.find_by(id: params[:id])
      @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_txt, :user_id, :pin_id)
  end

end
