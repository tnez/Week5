task create_data: :environment do
  # puts "Hello world!"
  puts "How many restaurants: "
  how_many = STDIN.gets.chomp.to_i
  orange = Food.create({name: "Orange"})
  how_many.times do
    Restaurant.create!({
      name: Faker::Company.name,
      description: Faker::Company.catch_phrase,
      foods: [
        orange
      ] 
    })
    # Find or create by (Rails)
  end
  puts "Created #{how_many} Restaurants"
end
