class Api::BoardPinsController < ApplicationController

    def index
        @board_pins = Pin.where(board_id: params[:board_id])
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

    def board_pin_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end
end