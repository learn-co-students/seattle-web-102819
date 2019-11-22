Rails.application.routes.draw do
  # resources :pets
  get '/pets', to: "pets#index", as: "puppy"
  get '/pets/:id', to: "pets#show", as: "show_puppy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end