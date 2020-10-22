Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#   resources :users, only: [:new, :create, :show]
#   resource :session, only: [:create, :new, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resources :board, only: [:index, :show, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :board_pins, only: [:index, :create]
  end
  root to: 'static_pages#root'
end

