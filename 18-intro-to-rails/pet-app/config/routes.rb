Rails.application.routes.draw do
  # resources :pets #this is a shortcut will add later
  get '/pets', to: "pets#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
