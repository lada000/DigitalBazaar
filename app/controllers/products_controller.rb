class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource
  
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end
end
