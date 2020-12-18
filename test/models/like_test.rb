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
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
