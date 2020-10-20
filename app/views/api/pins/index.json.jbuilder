@pins.each do |pin|
    json.set! pin.id do #this sets an object and uses pin.id as a key
        json.extract! pin, :id, :title, :description, :author_id
        json.photoUrl url_for(pin.photo)
        # json.photoUrls @post.photos.map { |file| url_for(file) }
    end
end

