# @board_pins.each do |board_pin|
#     json.set! board_pin.id do
#         # json.partial! "board_pin", board_pin: board_pin
#         # json.extract! "board_pin", board_pin: board_pin
#         json.extract! board_pin, :board_id, :pin_id
#         #   board_pin
#         #  json.extract! pin, :id, :title, :description, :author_id
#     end
# end


@board_pins.each do |pin|
    json.set! pin.id do #this sets an object and uses pin.id as a key
        json.extract! pin, :id, :title, :description, :author_id, :board_id
        json.photoUrl url_for(pin.photo)
    end
end

