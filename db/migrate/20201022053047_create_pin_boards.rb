class CreatePinBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :pin_boards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
