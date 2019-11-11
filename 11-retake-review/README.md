# Review Notes: 
- Start out with the base classes
- Build out our single source of truth
- Build out our association methods

#### Questions:
- Watching syntax ( deliverables to code)
    - Figuring out what methods and variables to use.

## Models/Review
- Account
    - This will be the join class
    - Account will have an initialize that will take in a user, social_media
- User
    - will have a name, age, email
    - will have an initialize that will take in a name, age, and email
    - User should be able to change the age and email but not the name.
    - User should have a method #all_my_accounts that returns a list of all the social_media accounts that I have -> List of account objects.
    - User should have a method .most_account that return a user object with the most social media accounts
    - User should have a method .average_age that will return a float of the average age of users
- Social Media
    - name
    - website_url
    - that will take in an initialize that will take in name and website_url
    - social_media should not be able to change either their website_url or their name.
    - SM will have a method #users that will return a list of all the users with an account
    - SM will have a method .most_popular_app that will return a string of the social media name with the most users.



