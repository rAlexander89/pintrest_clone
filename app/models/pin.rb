# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  owner       :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_id   :integer          not null
#
class Pin < ApplicationRecord
    validates :title, presence: true
    validates :description, presence: true


    has_one_attached :photo

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_many :board_pins,
    foreign_key: :pin_id,
    class_name: :BoardPin

    has_many :boards,
    through: :board_pins

    # has_many :boards


end
