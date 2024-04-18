# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    if user.admin?
      can :manage, :all
    elsif user.persisted?
      can :read, :all

      can :manage, User, id: user.id
      can :manage, Product, user_id: user.id

      can :create, Product
      can :manage, Cart, user_id: user.id
      can :manage, Order, user_id: user.id
      can :manage, Payment, user_id: user.id
    else
      can :read, :all
    end
  end
end
