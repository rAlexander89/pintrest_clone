json.pins do 
    json.extract! @pin, :title, :description, :author_id, :created_at
    json.photoUrl url_for(@pin.photo)
end