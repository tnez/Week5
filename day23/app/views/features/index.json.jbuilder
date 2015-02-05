json.array!(@features) do |feature|
  json.extract! feature, :id, :name, :difficulty, :probability, :description
  json.url feature_url(feature, format: :json)
end
