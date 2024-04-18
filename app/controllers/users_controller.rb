class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def edit
    @user = current_user
  end

  def show
    @user = User.find(params[:id])
  end
end
