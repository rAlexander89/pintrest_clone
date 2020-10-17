class Api::PinsController < ApplicationController

    before_action :require_login, only: [:create]

    def @pins = Pin.all
        render ##
    end

    def show
        @pin = Pin.find(param[:id])
        render #
    end

    def create
        @pin = Pin.new(pin_params)
        @pin.author_id = current_user.id
        
        if @poem.save
            render json: @pin
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @pin = current_user.pins.find_by(id: params[:id])
        if @pin && @poem.update(pin_params)
            redirect_to ##
        else
            render json: ['update errrrororo'] status: 422
        end
    end

    def pin_params
        params.require(:pin).permit(:title,pin)
    end

end
