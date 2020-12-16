class CreateComments < ActiveRecord::Migration[5.2]

    create_table :comments do |t|
      t.string :comment_txt, null: false
      t.integer :user_id, null: false
      t.integer :pin_id, null: false
      t.timestamps
  end

end
