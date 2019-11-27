Rails.application.routes.draw do
  resources :purchases, only:[:new, :create, :index, :show]
  # get '/brews/:id', to: "brews#show"
  get '/brews/strongest', to: 'brews#strongest'
  resources :brews
  #, only: [:index, :show, :new, :create, :edit, :update, :delete]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end