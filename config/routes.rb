Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :cart_items
  resources :carts
  resources :products
  resources :users
  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
  

  # root 'application#index'

  post 'carts/newcart', to: 'cartss#newcart'
  patch 'carts/shipping/:id', to: 'carts#shipping'
  patch 'users/cart_complete/:id', to: 'users#cart_complete'
end
