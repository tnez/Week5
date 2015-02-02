module RestaurantsHelper
  def is_restaurant_open?(restaurant_object)
    restaurant_object.workflow_state
  end
end
