Rails.application.routes.draw do
root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show] do 
      resources :boards, only: [:show, :create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]  
    resources :board_pins, only: [:index, :create, :show]
    resources :boards, only: [:index]
    # resources :user_boards, only: [:index, :create, :show]
  end
end

