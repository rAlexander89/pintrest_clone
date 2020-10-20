# json.partial! 'pin', pin: @pin
# 'pin' points to partial
# pin: references @pin



json.pin do 
    json.extract! @pin, :title, :description, :author_id, :created_at
    json.photoUrl url_for(@pin.photo)
end