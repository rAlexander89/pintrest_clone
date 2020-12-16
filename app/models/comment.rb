# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  comment_txt :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  pin_id      :integer          not null
#  user_id     :integer          not null
#
class Comment < ApplicationRecord

    validates :comment_txt, presence: true
    validates :pin_id, presence: true
    validates :user_id, presence: true

    belongs_to :commenter, 
    foreign_key: :user_id,
    class_name: :User

    belongs_to :pin, 
    foreign_key: :pin_id,
    class_name: :Pin 

end
