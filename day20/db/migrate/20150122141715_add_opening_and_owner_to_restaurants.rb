class AddOpeningAndOwnerToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :opening, :date
    add_column :restaurants, :owner, :string
  end
end
