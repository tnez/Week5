class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [
    :show,
    :edit,
    :update,
    :destroy,
    :open_restaurant,
    :close_restaurant,
    :construct_restaurant,
    :condemn_restaurant
  ]

  # GET /restaurants
  # GET /restaurants.json
  def index
    # This is the filtering of restaurants based on name or description
    @restaurants = if !params[:q].blank?
      # search for the restaurants
      Restaurant.where("name LIKE ? OR description LIKE ?", "%#{params[:q]}%", "%#{params[:q]}%")
    else
      # get all of the restaurants
      puts "HEY ZACH!"
      Restaurant.all
    end.shuffle
  end

  # GET /restaurants/1
  # GET /restaurants/1.json
  def show
    @foods = @restaurant.foods
    @comment = Comment.new
  end

  # GET /restaurants/new
  def new
    @restaurant = Restaurant.new
    @foods = Food.all
  end

  def create_comment
    @restaurant = Restaurant.find params[:id]
    @comment = @restaurant.comments.create comment_params
    redirect_to restaurant_path(@restaurant)
  end

  # GET /restaurants/1/edit
  def edit
    @foods = Food.all
  end

  # POST /restaurants
  # POST /restaurants.json
  def create
    @restaurant = Restaurant.new(restaurant_params)
    @foods = Food.all
    # flash
    if @restaurant.save
      flash[:notice] = 'Restaurant was successfully created.'
      redirect_to restaurants_path
    else
      flash[:alert] = "Restaurant was NOT saved."
      render :new
    end
  end

  # PATCH/PUT /restaurants/1
  # PATCH/PUT /restaurants/1.json
  def update
    @foods = Food.all
    respond_to do |format|
      if @restaurant.update(restaurant_params)
        format.html { redirect_to @restaurant, notice: 'Restaurant was successfully updated.' }
        format.json { render :show, status: :ok, location: @restaurant }
      else
        format.html { render :edit }
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /restaurants/1
  # DELETE /restaurants/1.json
  def destroy
    @restaurant.destroy
    respond_to do |format|
      format.html { redirect_to restaurants_url, notice: 'Restaurant was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def open_restaurant
    # @restaurant = Restaurant.find(params[:id])  
    @restaurant.open!
    redirect_to restaurants_path
  end

  def close_restaurant
    # @restaurant = Restaurant.find(params[:id])  
    @restaurant.close!
    redirect_to restaurants_path
  end

  def condemn_restaurant
    # @restaurant = Restaurant.find(params[:id])  
    @restaurant.condemn!
    redirect_to restaurants_path
  end

  def construct_restaurant
    # @restaurant = Restaurant.find(params[:id])  
    @restaurant.construct!
    redirect_to restaurants_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def restaurant_params
      params.require(:restaurant).permit(
        :name,
        :description,
        :address,
        :city,
        :state,
        :zip,
        :owner,
        :opening,
        food_ids: []
      )
    end

    def comment_params
      params.require(:comment).permit(
        :content
      )
    end
end
