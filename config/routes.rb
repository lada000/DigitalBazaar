Rails.application.routes.draw do
  get 'home/index'

  # Используйте явно заданный путь для редактирования пользователя
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', edit: 'profile' }

  # Маршруты для пользовательского профиля
  resources :users, only: [:show] do
    resources :products, only: [:index, :new, :create]
  end

  get "up" => "rails/health#show", as: :rails_health_check

  root to: "home#index"

  resources :products
end
