class EditPinsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :author_id
  end
end
