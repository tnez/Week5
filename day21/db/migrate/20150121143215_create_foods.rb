class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name
      t.text :description
      t.string :flavor
      t.boolean :expired
      t.string :texture
      t.float :cost

      t.timestamps null: false
    end
  end
end
