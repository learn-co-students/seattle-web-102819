# Sinatra Review
- Main takaways are getting used to REstful convention to use for our routes
- Introducing the MVC Pattern
- Understanding the flow of data from Model &rarr; Controller &rarr; View

# Rails :
1. This is first step - `rails new no-scaffold-pet-app`

2. [Documentation](https://guides.rubyonrails.org/generators.html)

### Routes Summary
| CRUD | HTTP Verb  | Route  | Action  |  View | UsedFor |
|---|---|---|---|---|---|
| Create |GET&darr; | '/books/new'  | books#new  |'new.erb'  |  form page to create a new book |
| Create | POST | '/books'  |  books#create | Reroutes to index| Creates a new book in the controller   |
| Read | GET  | '/books'  | books#index  |  index.erb|  displaying information about books  |
| Read |GET  | '/books/:id'  | books#show  |  show |display information about a specific book  |
|  Update | GET&darr; | 'books/:id/edit'  | books#edit| edit.erb  | Renders a form for user to edit  |
|  Update  | PATCH | 'books/:id'  | books#update  | redirects to show | updates the attributes in aspecific book |
| Delete  | "button" |  - |  - |  form with button in the show page | create a form so we can delete records and map it to an action  |
  |  Delete | Delete |  'books/:id' | books#delete |  | deletes/destroys a specific book in the DB|
