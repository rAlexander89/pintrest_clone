# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  owner       :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_id   :integer          not null
#  board_id    :integer          not null
#
class Pin < ApplicationRecord
    validates :title, presence: true, uniqueness: {scope: :author_id}
    validates :description, presence: true
    validates :owner, presence: true
    validates :board_id, presence: true


    has_one_attached :photo

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    # has_many :board_pins,
    # dependent: :destroy,
    # foreign_key: :pin_id,
    # class_name: :BoardPin

    # has_many :boards,
    # through: :board_pins

    has_many :boards,
    foreign_key: :author_id,
    class_name: :Board



end
