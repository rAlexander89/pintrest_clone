require 'byebug'
class Api::BoardsController < ApplicationController


    
    def index
        @boards = Board.all
        render :index
    end

    def show
        @board = Board.find_by(id: params[:id])
        if @board
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def create
        @board = Board.create(board_params)
        # @board.author_id = current_user.id
        if @board.save
            render "/api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end


    def board_params
        # params.require(:board).permit(:name, :description, :date_start, :date_end)
        params.require(:board).permit(:title, :description, :author_id)
    end

end
