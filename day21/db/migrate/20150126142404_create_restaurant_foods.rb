class CreateRestaurantFoods < ActiveRecord::Migration
  def change
    create_table :restaurant_foods do |t|
      t.integer :restaurant_id
      t.integer :food_id
    end
  end
end
