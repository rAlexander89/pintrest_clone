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
require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
