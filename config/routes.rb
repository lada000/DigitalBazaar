Rails.application.routes.draw do
  get 'home/index'
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  get "up" => "rails/health#show", as: :rails_health_check

  # Маршрут для главной страницы
  root to: "home#index"

  # Ресурсы для пользователей
  resources :users

  # Ресурсы для продуктов
  resources :products
end
