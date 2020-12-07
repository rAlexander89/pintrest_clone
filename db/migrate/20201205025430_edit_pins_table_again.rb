class EditPinsTableAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :board_id, :integer, null: false
    remove_column :pins, :owner
  end
end
