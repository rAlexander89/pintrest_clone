@board_pins.each do |board_pin|
    json.set! board_pin.id do
        # json.partial! "board_pin", board_pin: board_pin
        # json.extract! "board_pin", board_pin: board_pin
        json.extract! board_pin, :board_id, :pin_id
        #   board_pin
        #  json.extract! pin, :id, :title, :description, :author_id
    end
end


