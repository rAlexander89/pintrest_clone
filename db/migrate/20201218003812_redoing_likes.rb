class RedoingLikes < ActiveRecord::Migration[5.2]
  # def change
      # create_table :likes do |t|
      #   t.integer :user_id, null: false
      #   t.integer :likeable_id, null: false
      #   t.string :likeable_type, null: false

      #   t.timestamps
      # end

   def change
    create_table :likes do |t|
      t.integer :author_id, null: false
      t.references :likeable, polymorphic: true
      t.timestamps
    end

    add_index :likes, :author_id
  end
  
end
