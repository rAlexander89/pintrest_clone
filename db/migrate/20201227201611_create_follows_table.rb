class CreateFollowsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null:false
      t.integer :followee_id, null:false
    end
    
    add_index :follows, :followee_id
    add_index :follows, :follower_id

  end
end
