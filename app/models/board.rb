# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  description :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_id   :integer          not null
#
class Board < ApplicationRecord

    validates :author_id, :title, presence: true
    validates :title, presence: true, uniqueness: {scope: :author_id}

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User
    
    has_many :board_pins, 
    dependent: :destroy
    
    has_many :pins, 
    through: :boards_pins,
    dependent: :destroy,
    source: :pin
end
