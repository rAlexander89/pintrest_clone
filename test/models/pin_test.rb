# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  pin        :string           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#
# Indexes
#
#  index_pins_on_author_id  (author_id) UNIQUE
#
require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
