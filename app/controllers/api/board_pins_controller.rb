class Api::BoardPinsController < ApplicationController

    def index
        @board_pins = BoardPin.all
        # render "/api/board_pins/index"
        render :index
    end

    def create
        debugger
        # @board_pin = BoardPin.create(board_pin_params)
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
