const images = [
  {
    "image": "images/haku.png",
    "film": "Spirited Away"
  },
  {
    "image": "images/pazu.png",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/sheeta.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/dola.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/muska.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/pom.png",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/Muoro.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/duffi.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/louis.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/charles.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/henri.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/motro.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/okami.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/Ashitaka.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/san.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/Eboshi.png",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/jigo.png",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/koroku.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/gonza.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/hiisama.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/yakul.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/shishigami.jpg",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/moro.png",
    "film": "Princess Mononoke"
  },
  {
    "image": "images/jiji.jpg",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/Satsuki.png",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/mei.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/tatsuo.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/Yasuko.png",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/granny.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/kanta.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/totoro.png",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/chu.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/chibi.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/cat.jpg",
    "film": "My Neighbor Totoro"
  },
  {
    "image": "images/niya.jpg",
    "film": "The Secret World of Arrietty"
  },
  {
    "image": "images/muta.jpg",
    "film": "The Cat Returns"
  },
  {
    "image": "images/catking.jpg",
    "film": "The Cat Returns"
  },
  {
    "image": "images/yuki.jpg",
    "film": "The Cat Returns"
  },
  {
    "image": "images/haru.jpg",
    "film": "The Cat Returns"
  },
  {
    "image": "images/baron.jpg",
    "film": "The Cat Returns"
  },
  {
    "image": "images/natori.png",
    "film": "The Cat Returns"
  },
  {
    "image": "images/muska-again.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/rosso.jpg",
    "film": "Porco Rosso"
  },
  {
    "image": "images/sasuke.jpg",
    "film": "Ponyo"
  },
  {
    "image": "images/kiki.png",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/robot.jpg",
    "film": "Castle in the Sky"
  },
  {
    "image": "images/chihiro.jpg",
    "film": "Spirited Away"
  },
  {
    "image": "images/osono.jpg",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/ursula.jpg",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/Tombo.jpg",
    "film": "Kiki's Delivery Service"
  },
  {
    "image": "images/madame.jpg",
    "film": "Kiki's Delivery Service"
  }
]

async function displayPeople(){

  let infoDiv = document.getElementById('info');
  let loader = document.getElementById("load");
  loader.style.display = "block";


  try{
    let fetched = await fetch('https://ghibliapi.herokuapp.com/people')
    let response = await fetched.json();
    loader.style.display = "none";
    
    console.log(response)

    for(let i = 0; i<response.length; i++){

        groupDiv = document.createElement('div');
        groupDiv.classList.add('group');
        infoDiv.appendChild(groupDiv)
        groupDiv.setAttribute('id', `${i+1}`)

        let imageD= document.createElement("img");
        imageD.setAttribute("src", images[i].image);
        imageD.classList.add("film-image");
        imageD.classList.add("people-image");
        groupDiv.appendChild(imageD);

        let div = document.createElement('div');
        div.classList.add('overlay');
        div.classList.add('overlay--blur');
        groupDiv.appendChild(div)

        let name = document.createElement('h2');
        name.innerText = response[i].name;
        name.classList.add('name')
        div.appendChild(name);

        let age = document.createElement('h2');
        age.innerText = `Age: ${response[i].age}`;
        age.classList.add('age')
        div.appendChild(age);

        let gender = document.createElement('h2');
        gender.innerText = `Gender: ${response[i].gender}`;
        gender.classList.add('gender')
        div.appendChild(gender);

        let film = document.createElement('h2');
        film.innerText = `Film: ${images[i].film}`;
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