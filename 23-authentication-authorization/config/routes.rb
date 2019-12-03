Rails.application.routes.draw do
  resources :teachers
  resources :students, only: [:show, :new, :index, :create]
  root to: "students#index"
  get '/signup', to: "teachers#new"
  post '/signup', to: "teachers#create"

  get '/login', to: "auth#signin"
  post '/login', to: "auth#verify"

  get '/logout', to: "auth#logout"
end
