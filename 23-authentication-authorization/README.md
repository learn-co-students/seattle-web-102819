## SWBATs
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
    - prove you are who you are
    - two factor authentication
    - you can't handle the truth
2. What is authorization?
    - allowing access
    - once you are authenticated what can you access.
    - moderator - higher level access.


## User Stories
1. As a registered teacher, I should be able to sign up by providing my username.
    - Model
        - class 
              - teacher : username, email
        - migrations
              - create teacher table
        - Associations/
        - Seed/
    - Controller Action
        - new page -> signup form
        - create page -> which is going to create a teacher
    - Routes
        - new, create
        - /signup
    - View
        - new
        - take it to the show page of the teacher
        - students index page

2. As a registered teacher, I should be able to log in by providing my username.
    - custom route for login
    - some kind of new form, take in a username and email
    - see if the user exists in our database
    - set it as the session[:user_id] from the login
    - route them to create a new user
    -> also can have a button, also can render the form again
        - use flash to show them the message
    - or tell them if it's the wrong login

3. As an un-authenticated teacher, I should not be able to see a list of students and information about an individual student.

4. As an authenticated teacher I should be able see a list of students and information about an individual student plus create a new student.

5. If an un-authenticated teacher tries to see the new student form, they should be redirected to the login page.

6. I should be able to add a password to my site and validate teacher.

## Resources
##### Password Authentication Guidelines

- install gem `bcrpyt`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)

- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
"README.md" 41L, 1628C
