Rails.application.routes.draw do
  resources :tags, only: [ :index ]
  resources :reviews, only: [ :index, :show, :create ]
  resources :blogs, only: [ :index, :show, :create, :update, :destroy ]
  resources :users, only: [ :index, :show, :create ] 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
