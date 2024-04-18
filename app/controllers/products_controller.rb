class ProductsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  def index
    @user = User.find(params[:user_id])
    @products = @user.products
  end

  def new
    @user = User.find(params[:user_id])
    @product = @user.products.build
  end

  def create
    @user = User.find(params[:user_id])
    @product = @user.products.build(product_params)
    if @product.save
      redirect_to user_products_path(@user), notice: 'Product was successfully created.'
    else
      render :new
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price)
  end
end
