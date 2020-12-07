class Api::BoardPinsController < ApplicationController

    def index
        @board_pins = BoardPin.all
        render :index
    end

    def create
        @board_pin = BoardPin.new(board_pin_params)
        if @board_pin.save
            render json: @board_pin.pin_id
        else
            render json: @board_pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @board_pin = BoardPin.find_by(id: params[:id])
            if @board_pin.destroy
                render json: @board_pin.id
            else 
                render json: @board_pin.errors.full_messages, status: 422
            end
        else
            render json: @board_pin.errors.full_messages, status: 422
        end
        
    end

    def board_pin_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end
end
