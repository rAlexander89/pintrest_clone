class EditBoards < ActiveRecord::Migration[5.2]
  def change
        # add_column :pins, :photoUrl, :string
        rename_column :boards, :user_id, :author_id
  end
end
