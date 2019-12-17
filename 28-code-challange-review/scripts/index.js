document.addEventListener("DOMContentLoaded", function() {
  const elephantsURL = "http://localhost:3000/elephants";
  const adoptionURL = "http://localhost:3000/adoption";
  let currentIndex = 1;
  getFetch()
  getAdopted()

  function getFetch(){
      fetch(elephantsURL+`/${currentIndex}`)
      .then(res => res.json())
      .then(data => showElephant(data))
  }

  function getAdopted(){
    fetch(adoptionURL)
    .then(res => res.json())
    .then(data => {
      data.forEach(elephant => showAdopted(elephant))
    })
  }
  function postEl(obj){
    console.log(obj, adoptionURL)
    console.log(JSON.stringify(obj))
    fetch(adoptionURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json' 
      },
      body: JSON.stringify({"elephantName": obj.elephantName})
    })

  }

  function patchEl(obj){
    fetch(`${adoptionURL}/${obj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json' 
      },
      body: JSON.stringify({"elephantName": obj.elephantName})
    })
    .then(res => res.json())
    .then(data => {
      let ul = document.querySelector('#my-elephants')
      ul.innerHTML = ''
      getAdopted()
    })
  }

  //show elephants
  function showElephant(data){
    let img = document.getElementsByClassName('img')
    img[0].src = data.image
    let name = document.querySelector('.name')
    name.textContent = data.name
    let species = document.querySelector('.species')
    species.textContent = data.species
    let note = document.querySelector('.note')
    note.textContent = data.note
  }

  //show elephants on adoption List
  function showAdopted(obj){
    console.log(obj)
    let ul = document.querySelector('#my-elephants')
    let li = document.createElement('li')
    li.innerText = obj.elephantName
    ul.appendChild(li)
    
  }

  const adopt = document.querySelector('.adopt')

  adopt.addEventListener('click', function(e){
   
   let elId = currentIndex; 
   let elName = document.querySelector('.name').textContent
   console.log(elId, elName)
   let elobj = {"elephantName": elName, "id": elId}
   showAdopted(elobj)
   postEl(elobj)
  })

  // on click change elephant
  const next = document.querySelector('.next')
  const back = document.querySelector('.back')

  next.addEventListener('click', function(e){
    currentIndex++
    getFetch()
  
  })
  back.addEventListener('click', function(e){
    currentIndex--
    if(currentIndex < 1 ){
      currentIndex = 1
    }
    getFetch()
  })




  // on click add elephant to 'My Elephants' list

  // on submit change an elephants name from the 'My Elephants' list
  const elephantForm = document.getElementById('elephant-form')
  elephantForm.addEventListener('submit', function(e){
    e.preventDefault()
    let name = e.target.name.value
    let id = e.target.id.value
    let elobj = {"elephantName": name, "id": id}
    patchEl(elobj)
    
  })

});
