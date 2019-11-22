json.extract! pet, :id, :name, :species, :age, :created_at, :updated_at
json.url pet_url(pet, format: :json)
