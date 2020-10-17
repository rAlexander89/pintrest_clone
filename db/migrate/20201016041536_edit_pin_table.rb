class EditPinTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :pins, :pin, :description
  end
end
