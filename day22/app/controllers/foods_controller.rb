class FoodsController < ApplicationController
  def index
    @foods = Food.all
  end

  def new
    @food = Food.new
    @restaurants = Restaurant.all
  end

  def create
    @food = Food.create food_params
    redirect_to foods_path
  end

  def edit
    @food = Food.find params[:id]
    @restaurants = Restaurant.all
  end

  def update
    @food = Food.find params[:id]
    @food.update_attributes food_params
    redirect_to foods_path
  end

  def destroy
    @food = Food.find params[:id]
    @food.delete
    redirect_to foods_path
  end

  private 

  def food_params
    params.require(:food).permit(
      :name,
      :description,
      :flavor,
      :expired,
      :texture,
      :cost,
      restaurant_ids: []
    )
  end
end
