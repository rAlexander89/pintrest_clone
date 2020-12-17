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
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
