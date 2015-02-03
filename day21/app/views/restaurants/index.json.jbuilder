json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :description, :address, :city, :state, :zip
  json.url restaurant_url(restaurant, format: :json)
end
