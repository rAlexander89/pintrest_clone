class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :pin, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :pins, :author_id, unique: true
  end
end
