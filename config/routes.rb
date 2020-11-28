Rails.application.routes.draw do
root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resources :boards, only: [:index, :show, :create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]  
    resources :board_pins, only: [:index, :create, :show]
  end
end

