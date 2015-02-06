namespace :db do

  task :generate_features => :environment do
    Feature.create!(
      name: 'Lose 1 day',
      difficulty: 'Easy',
      description: 'You lose 1 total day of development time.')
    Feature.create!(
      name: 'Lose 1 random team member',
      difficulty: 'Medium',
      description: 'You lose 1 random team member.'
    )
    Feature.create!(
      name: 'Lose 1 team member of choice',
      difficulty: 'Harsh',
      description: 'You lose 1 team member, however the member must be voted off survivor-style.'
    )
    Feature.create!(
      name: 'Use ERB',
      difficulty: 'Easy',
      description: 'You can not use any other templating language except for ERB.'
    )
    Feature.create!(
      name: 'Use HAML',
      difficulty: 'Medium',
      description: 'HAML is the only templating language you can use.'
    )
    Feature.create!(
      name: 'Use SLIM',
      difficulty: 'Medium',
      description: 'SLIM is the only templating language you can use.'
    )
    Feature.create!(
      name: 'JADE',
      difficulty: 'Medium',
      description: 'JADE is the only templating language you can use.'
    )
    Feature.create!(
      name: 'jQuery HTML generation',
      difficulty: 'Extremely Difficult',
      description: 'The only HTML you can use is your application.html file and/or routing files. You MUST generate everything via jQuery click events.'
    )
    Feature.create!(
      name: 'Document your plan',
      description: 'You MUST plan your application before you start coding.',
    )
    Feature.create!(
      name: 'Spend a day learning with the Front Enders',
      difficulty: 'Hard',
      description: 'You must spend a lab day working with the front end students and/or asking Calvin for help instead of Nick and/or your fellow Rails students.'
    )
    Feature.create!(
      name: 'Responsive with no CSS Framework',
      difficulty: 'Hard',
      description: 'Your application must be styled and responsive without the use of any CSS frameworks and/or tools.'
    )
    Feature.create!(
      name: 'AJAX all the things',
      difficulty: 'Hard',
      description: 'Your application will function like a single page application. When you click links the pages will be re-drawn AJAX style.'
    )
    Feature.create!(
      name: 'Extra day of development time',
      difficulty: 'Ez pz',
      description: 'You get an extra day of development time. Don\'t forget, though, you may have additional assignments from that day.'
    )
    Feature.create!(
      name: 'Take 5 minutes',
      difficulty: 'Even easier',
      description: 'Group hug time. Go cry together.'
    )
  end

  task :initialize => :environment do
    Rake::Task["db:drop"].execute
    Rake::Task["db:create"].execute
    Rake::Task["db:migrate"].execute
    Rake::Task["db:generate_features"].execute
  end
end
