Rails.application.routes.draw do

  get 'home/index'
  devise_for :users do
    # controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  end

  # # Маршруты для регистрации пользователей с использованием вашего нового контроллера
  # devise_scope :user do
  #   get '/custom_sign_up', to: 'registrations#new', as: 'new_user_registration'
  #   post '/custom_sign_up', to: 'registrations#create', as: 'user_registration'
  # end

  get "up" => "rails/health#show", as: :rails_health_check

  # Маршрут для главной страницы
  root to: "home#index"

  # Ресурсы для продуктов
  resources :products
end
