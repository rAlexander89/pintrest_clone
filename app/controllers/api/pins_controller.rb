class Api::PinsController < ApplicationController

    # before_action :require_login, only: [:create]
    before_action :require_login

    def index
        @pins = Pin.all
        render :index
    end

    def show
        @pin = Pin.find(params[:id])
        render :show
    end

    def create 
        @pin = Pin.new(pin_params)
        @pin.author_id = current_user.id
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def update
        @pin = current_user.pins.find_by(id: params[:id])
        debugger
        if @pin && @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end


    def destroy
        @pin = Pin.find_by(id: params[:id])
        if @pin && @pin.author_id == current_user.id
            if @pin.destroy
                render json: @pin.id
            else 
                render json: @pin.errors.full_messages, status: 422
            end
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end





    def pin_params
        params.require(:pin).permit(:photo, :title, :description, :owner, :author_id, :board_id)
    end

end
