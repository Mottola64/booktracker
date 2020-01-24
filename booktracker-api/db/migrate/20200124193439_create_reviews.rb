class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :book, foreign_key: true
      t.string :content
      t.string :reviewer
      t.timestamps
    end
  end
end
