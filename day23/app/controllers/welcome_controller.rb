class WelcomeController < ApplicationController
  def index
    @features = Feature.all
  end
end
