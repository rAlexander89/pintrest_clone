# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  author_id     :integer          not null
#  likeable_id   :bigint
#
# Indexes
#
#  index_likes_on_author_id                      (author_id)
#  index_likes_on_likeable_type_and_likeable_id  (likeable_type,likeable_id)
#

    # validates :user_id, presence: true, uniqueness: {scope: [:liked_id, :type_liked]}

    # belongs_to :user,
    # foreign_key: :user_id,
    # class_name: :User

    # belongs_to :liked,
    # foreign_key: :liked_id,
    # class_name: :Pin

# end

class Like < ApplicationRecord

    # validates :user_id, presence: true

    # belongs_to :liked,
    # foreign_key: :liked_id,
    # polymorphic: true

    # belongs_to :user,
    # foreign_key: :user_id,
    # class_name: :User

    # validates :user_id, :likeable_type, :likeable_id, presence: true
    # validates :user_id, :uniqueness => { :scope => [:likeable_type, :likeable_id] }
    # belongs_to :likeable, polymorphic: true

    validates :author_id, presence: true

    belongs_to :likeable, polymorphic: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User


end
