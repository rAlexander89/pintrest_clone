# == Schema Information
#
# Table name: pin_boards
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  board_id    :integer          not null
#  pin_id      :integer          not null
#
require 'test_helper'

class PinBoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
