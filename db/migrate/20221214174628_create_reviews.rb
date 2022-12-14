class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :rating
      t.belongs_to :blog
      t.belongs_to :user

      t.timestamps
    end
  end
end
