class AddToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :owner, :string
  end
end
