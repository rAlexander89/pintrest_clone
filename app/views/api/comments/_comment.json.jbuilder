
json.extract! comment, :id, :comment_txt, :pin_id, :user_id
json.username comment.commenter.username
# json.user_id comment.commenter.id