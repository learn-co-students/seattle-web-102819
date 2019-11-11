url = "https://www.googleapis.com/books/v1/volumes?q=The+Chronicles+of+Narnia"

response = RestClient.get(url)

json_data = JSON.parse(response)
books = json_data["items"]

books.each do |book|
    p "*********************"
    p "Title: " + book["volumeInfo"]["title"]
    p "Published Date " + book["volumeInfo"]["publishedDate"]
    p "Average Rating  " + book["volumeInfo"]["averageRating"].to_s
    ag = book["volumeInfo"]["averageRating"]
    # binding.pry
    Book.create(title: book["volumeInfo"]["title"], 
                published_date: book["volumeInfo"]["publishedDate"], 
                average_rating: ag )
    end
# binding.pry

# 0