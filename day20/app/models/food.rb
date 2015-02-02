# Fat Models, Skinny Controllers
class Food < ActiveRecord::Base
  # restaurant_id - integer
  # belongs_to :restaurant
  has_many :restaurant_foods
  has_many :restaurants, through: :restaurant_foods
  # @food.restaurants

  has_many :comments, as: :commentable

  EXPIRED_OPTIONS = [
    ["True", true],
    ["False", false]
  ]

end
