class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :content
      t.string :slug
      t.belongs_to :user
      t.belongs_to :review
      t.belongs_to :tag
      
      t.timestamps
    end
  end
end
