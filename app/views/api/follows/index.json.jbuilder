json.array! @follows do |follow|
    json.extract! follow, :id, :follower_id, :followee_id
end