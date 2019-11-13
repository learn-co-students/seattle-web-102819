Author.destroy_all
Book.destroy_all
AuthorsBook.destroy_all
# SqliteSequence.destroy_all

a1 = Author.create(name: Faker::Artist.name, age: 88)
a2 = Author.create(name: Faker::Artist.name, age: 50)
a3 = Author.create(name: Faker::Artist.name, age: 30)
a4 = Author.create(name: Faker::Artist.name, age: 30)


b1 = Book.create(name: Faker::Kpop.solo , publisher: "Blue books", pages: 300, genre: "fanatasy")
b2 = Book.create(name: Faker::Kpop.solo , publisher: "Blue books", pages: 300, genre: "fanatasy")
b3 = Book.create(name: Faker::Kpop.solo , publisher: "Blue books", pages: 300, genre: "fanatasy")
b4 = Book.create(name: Faker::Kpop.solo , publisher: "Blue books", pages: 300, genre: "fanatasy")

AuthorsBook.create(author_id: a3.id , book_id: b2.id)
AuthorsBook.create(author_id: a1.id , book_id: b4.id)
AuthorsBook.create(author_id: a4.id , book_id: b1.id)
AuthorsBook.create(author_id: a2.id , book_id: b4.id)