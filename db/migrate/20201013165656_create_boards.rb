class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :description, nul: false

      t.timestamps
    end

  end
end
