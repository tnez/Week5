class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.string :name
      t.string :difficulty
      t.float :probability
      t.text :description

      t.timestamps null: false
    end
  end
end
