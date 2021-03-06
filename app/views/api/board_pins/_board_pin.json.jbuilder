# json.extract! board_pin, :pin_id, :board_id


json.pins do 
    json.extract! @pin, :title, :description, :author_id, :board_id, :created_at
    json.photoUrl url_for(@pin.photo)
end