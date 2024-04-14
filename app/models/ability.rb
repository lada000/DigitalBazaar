# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # Если пользователь не вошел в систему, он будет гостем (пустой пользователь)

    if user.admin?
      can :manage, :all # Администратор может управлять всеми ресурсами
    elsif user.persisted? # Пользователь с регистрацией и подтвержденной почтой
      can :read, :all # Может просматривать все ресурсы

      can :manage, User, id: user.id # Может управлять своим профилем
      can :manage, Product, user_id: user.id # Может управлять своими товарами

      can :create, Product # Может создавать новые товары
      can :manage, Cart, user_id: user.id # Может управлять своей корзиной
      can :manage, Order, user_id: user.id # Может управлять своими заказами
      can :manage, Payment, user_id: user.id # Может управлять своими платежами
    else
      can :read, :all # Гость может только просматривать ресурсы
    end
  end
end
