
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
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board && @board.author_id == current_user.id
            if @board.update(board_params)
                render :show
            else
                render json: @board.errors.full_messages, status: 422
            end
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        if @board && @board.author_id == current_user.id
            if @board.destroy
                render json: @board.id
            else
                render json: @board.errors.full_messages, status: 422
            end
        end
    end


    def board_params
        params.require(:board).permit(:title, :description, :author_id)
    end

end
