class AddNewLikesTable < ActiveRecord::Migration[5.2]
  def change
       create_table :likes do |t|
      t.integer :liked_id, null: false
      t.integer :user_id, null: false
      t.string :type_liked, null: false
      t.timestamps
    end
  end
end
