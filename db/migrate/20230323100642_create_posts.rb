class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :comment
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :cryptid, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
