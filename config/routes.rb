Rails.application.routes.draw do
root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      # resources :boards, only: [:index, :create] -- putting boards index outside of users
      resources :boards, only: [:create, :update]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :boards, only: [:index, :show]
    resources :board_pins, only: [:index, :create]
  end
end

