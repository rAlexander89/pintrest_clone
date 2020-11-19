Rails.application.routes.draw do
root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resources :board, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :board, only: [:create, :show, :create]
    resources :board_pins, only: [:index, :create]
  end
end

