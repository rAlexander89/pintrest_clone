class RemoveDescriptionFromBoardPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :board_pins, :description
  end
end
