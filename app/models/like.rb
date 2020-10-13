# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  pin_id     :integer          not null
#  user_id    :integer          not null
#
class Like < ApplicationRecord
end
