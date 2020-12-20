
json.extract! like, :id, :author_id, :likeable_type, :likeable_id 




# @likes.each do |like|
#     json.set! like.id do
#         json.partial! "like", like: like
#     end
# end