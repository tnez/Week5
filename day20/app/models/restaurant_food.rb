class RestaurantFood < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :food
end
