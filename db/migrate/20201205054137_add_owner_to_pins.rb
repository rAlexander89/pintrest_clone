class AddOwnerToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :owner, :string, null: false
  end
end
