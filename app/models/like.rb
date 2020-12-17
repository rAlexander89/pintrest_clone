# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  type_liked :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  liked_id   :integer          not null
#  user_id    :integer          not null
#
class Like < ApplicationRecord

    validates :user_id, uniqueness: {scope: [:liked_id, :type_liked]}

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :liked,
    foreign_key: :liked_id,
    class_name: :Pin

end
