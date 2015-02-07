json.array!(@features) do |feature|
  json.extract! feature, :id, :name, :difficulty, :description
  json.url feature_url(feature, format: :json)
end
