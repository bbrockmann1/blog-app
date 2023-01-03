Rails.application.routes.draw do
  
  resources :tags, only: [ :index ]
  resources :reviews, only: [ :index, :show, :create ]
  resources :blogs
  resources :users, only: [ :index, :show, :create ] 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  #routes for creating and destroying sessions/cookies
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
end
