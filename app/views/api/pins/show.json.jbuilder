
json.pin do
    json.extract! @pin, :id, :title, :description, :author_id, :board_id, :owner, :created_at
    json.photoUrl url_for(@pin.photo)
end

# json.owner do
#     json.extract! @pin.author, :username, :id
# end

