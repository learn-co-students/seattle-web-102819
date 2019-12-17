# Adopt an Elephant 
## An elephant never forgets its forever home.

Adopt-a-Elephant is the world's leading adoption app for world's largest land mammal.

*start server*
```
json-server --watch db.json
```
*Resources*
```
/elephants 
/elephants/:id
/adoption
/adoption/:id

```
*MVP User Stories:*

A user can:
* [x] Display one Elephants name, species, image and note at a time.
* [x] Flip through Elephants using the next and back buttons 
* [x] See a list of the names of the Elephants they have adopted 
* [x] Add an elephant to their adopted list (POST)(optimistic rendering)
* [x] Update an adopted elephants name with a (PATCH)(pessimistic rendering)

*Bonus*
A user can :
* Delete an elephant from the adoption list after it has been adopted.

# Required Headers for POST and PATCH
```
  headers: {
      'Content-Type': 'application/json'
    }

```
# Example Response for elephants/:id

```
   {
      "id": 20,
      "name": "Lallah Rookh",
      "affiliation": "Dan Rice Circus",
      "species": "Asian",
      "sex": "Female",
      "fictional": "false",
      "dob": "Unavailable",
      "dod": "1860",
      "wikilink": "https://en.wikipedia.org/wiki/Lallah_Rookh",
      "image": "https://elephant-api.herokuapp.com/pictures/missing.jpg",
      "note": "A female elephant known for her tightrope walking act."
    }
``` 

# Example Response for adoption

```
[
    {
      "elephantName": "tom",
      "id": 1
    }
  ]
```