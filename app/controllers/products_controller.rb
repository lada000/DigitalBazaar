class ProductsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_product, only: [:edit, :update, :destroy]
  load_and_authorize_resource

  def index
    @user = User.find(params[:user_id])
    @products = @user.products
  end

  def new
    @product = current_user.products.build
  end

  def create
    @product = current_user.products.build(product_params)
    if @product.save
      redirect_to user_products_path(current_user), notice: 'Product was successfully created.'
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def find_product
    @product = current_user.products.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:title, :description, :price, :image, :category)
  end

end
