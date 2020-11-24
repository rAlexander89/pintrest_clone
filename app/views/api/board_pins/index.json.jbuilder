@board_pins.each do |board_pin|
    json.set! board_pin.id do
        json.partial! "board_pin", board_pin: board_pin
    end
end