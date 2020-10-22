class RenameToBoardPins < ActiveRecord::Migration[5.2]
  def change
    rename_table :pin_boards, :board_pins
  end
end
