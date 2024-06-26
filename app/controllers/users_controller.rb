class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update, :show]

  def index
    @users = User.all
  end

  def edit
  end

  def show
  end

  def update
   if @user.update(user_params)
     redirect_to @user, notice: 'User was successfully updated.'
   else
     render :edit
   end
 end

  def admin?
    current_user&.admin?
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
