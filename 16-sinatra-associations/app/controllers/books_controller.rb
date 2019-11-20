class BooksController < Sinatra::Base
    set :views, 'app/views'
    enable :sessions
    set :method_override, true

    get '/' do
        "Hello World"
    end
    # <Type of request> '<resource>'
    get '/google_books' do
        #1. Get the data
        # binding.pry
        @google_books = GoogleBook.all
        #2. Telling the route where to do
        erb :index
    end

    #CREATE Part 1
    get '/google_books/new' do
        erb :new
    end
    #Create Part 2
    post '/google_books' do 
        # binding.pry
        google_book = GoogleBook.new(title: params[:title], author: params[:author], snippet: params[:snippet])
        google_book.save
        # erb :book_saved
        redirect "/google_books/#{google_book.id}"
        # else
        #     # session[:message] = google_book.errors.full_messages
        #     erb :book_not_saved
        # end
    end

    get '/google_books/:id/edit' do
        @google_book = GoogleBook.find(params[:id])
        erb :edit
    end

    patch '/google_books/:id' do 
        # binding.pry
        @google_book = GoogleBook.find(params[:id])
        @google_book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
        redirect "/google_books/#{@google_book.id}"
    end

    get '/google_books/:id' do
        #1
        # binding.pry
        @google_book = GoogleBook.find_by(id: params[:id])
        #2 telling it where to go
        # binding.pry
        erb :show
    end

    get '/fun_stuff' do
        @say_hello = "Bye"
        erb :bye
    end

    delete '/google_books/:id' do
        @google_book = GoogleBook.find(params[:id])
        @google_book.delete
        redirect "/google_books"
    end

end