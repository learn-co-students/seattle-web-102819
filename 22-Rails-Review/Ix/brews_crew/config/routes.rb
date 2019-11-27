Rails.application.routes.draw do
  resources :purchases, only: [:index,:show,:new,:create,:edit,:update]
  resources :brews
  get '/brews/strongest', to: 'brews#strongest'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



end
