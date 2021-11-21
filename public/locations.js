const locations = [
  {
    "image": "images/irontown.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/Gutiokipanja.jpg",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/catkingdom.jpg",
    "film": "The Cat Returns"
  },
  {
    "image": "images/marsh.jpg",
    "film": "When Marnie Was There"
  },
  {
    "image": "images/hospital.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/gondoa.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/cabin.jpg",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/cottage.png",
    "film": "Spirited Away"
  },
  {
    "image": "images/bamboo.jpg",
    "film": "The Tale Of The Princess Kaguya"
  },
  {
    "image": "images/mines.png",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/appartment.jpg",
    "film": "Whisper of the Heart"
  },
  {
    "image": "images/laputa.png",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/tedus.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/Koriko.png",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/forest.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/bath.png",
    "film": "Spirited Away"
  },
  {
    "image": "images/matsugo.png",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/house.jpg",
    "film": "Only Yesterday"
  },
  {
    "image": "images/picolo.jpg",
    "film": "Porco Rosso"
  },
  {
    "image": "images/Karikiya.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/school.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/water.jpg",
    "film": "Ponyo"
  },
  {
    "image": "images/nursery.jpg",
    "film": "Ponyo"
  },
  {
    "image": "images/Ingary.jpg",
    "film": "Howl's Moving Castle"
  }
]


async function displayLocations (){

  let infoDiv = document.getElementById('info');
  let loader = document.getElementById("load");
  loader.style.display = "block";


  try{
    let fetched = await fetch('https://ghibliapi.herokuapp.com/locations')
    let response = await fetched.json();
    loader.style.display = "none";
    
    console.log(response)

    for(let i = 0; i<response.length; i++){

        groupDiv = document.createElement('div');
        groupDiv.classList.add('groupTwo');
        infoDiv.appendChild(groupDiv)
        groupDiv.setAttribute('id', `${i+1}`)

        let image= document.createElement("img");
        image.setAttribute("src", locations[i].image);
        image.classList.add("film-image");
        image.classList.add("location-image");
        groupDiv.appendChild(image);

        let div = document.createElement('div');
        div.classList.add('overlay');
        div.classList.add('overlay--blur');
        groupDiv.appendChild(div)

        let name = document.createElement('h2');
        name.innerText = response[i].name;
        name.classList.add('name')
        div.appendChild(name);

        let film = document.createElement('h2');
        film.innerText = `Film: ${locations[i].film}`;
        film.classList.add('film')
        div.appendChild(film);
    }

        let input = document.getElementById('search');
          input.addEventListener("input", function(){

          response.filter((element)=>!element.name.toLowerCase().includes(event.target.value.toLowerCase()))
          .forEach((element)=> {
          let index = response.findIndex(x=> x.name === element.name);
          document.getElementById(index+1).style.display = 'none'
          });

          response.filter((element)=>element.name.toLowerCase().includes(event.target.value.toLowerCase()))
          .forEach((element)=> {
          let index = response.findIndex(x=> x.name === element.name);
          document.getElementById(index+1).style.display = 'block'
          });                           

        }) 

  } catch(err) {
    console.log(err)
    }
}