function getFilms(){
	window.location.href='file:///C:/Users/user/Desktop/Exercise/Hackathon2/public/films.html'
}

function getPeople(){
	window.location.href ='file:///C:/Users/user/Desktop/Exercise/Hackathon2/public/people.html'
}

function getPlaces(){
	window.location.href ='file:///C:/Users/user/Desktop/Exercise/Hackathon2/public/places.html'
}

async function displayFilms(){
	let infoDiv = document.getElementById('info');
	let loader = document.getElementById("load");
	loader.style.display = "block";

	try{
		let fetched = await fetch('https://ghibliapi.herokuapp.com/films')
		let response = await fetched.json();
		loader.style.display = "none";

		console.log(response)

		for(let i = 0; i<response.length; i++){
            groupDiv = document.createElement('div');
            groupDiv.classList.add('group');
            infoDiv.appendChild(groupDiv)
            groupDiv.setAttribute('id', `${i+1}`)

            let popUpBox = document.getElementById('popup');

            groupDiv.addEventListener('click', function (event){
		        let popUpDiv = document.createElement('div');
		        popUpBox.appendChild(popUpDiv)

                let title = document.createElement('h2');
		        title.innerText = response[i].title;
		        title.classList.add('pop-up-title')
		        popUpDiv.appendChild(title);

		        let japanese = document.createElement('h2');
		        japanese.innerText = response[i].original_title;
		        japanese.classList.add('pop-up-title')
		        popUpDiv.appendChild(japanese);

		        let year = document.createElement('h2');
		        year.innerText = response[i].release_date;
		        year.classList.add('pop-up-year')
		        popUpDiv.appendChild(year);

                let text = document.createElement('p');
                text.classList.add('pop-up-text');
                text.innerText = response[i].description;
                popUpDiv.appendChild(text)

                popUpBox.style.display = 'block';
                // this.removeEventListener('click', arguments.callee);

                let exitButton = document.getElementById('exit');
                exitButton.addEventListener('click', function(){
                	popUpBox.style.display = 'none';
                	popUpDiv.innerText = '';
                })
            })

			let image= document.createElement("img");
		    image.setAttribute("src", response[i].image);
		    image.classList.add("film-image");
		    groupDiv.appendChild(image);

		    let div = document.createElement('div');
		    div.classList.add('overlay');
		    div.classList.add('overlay--blur');
		    groupDiv.appendChild(div)

		    let title = document.createElement('h2');
		    title.innerText = response[i].title;
		    title.classList.add('title')
		    div.appendChild(title);

		    let japanese = document.createElement('h2');
		    japanese.innerText = response[i].original_title;
		    japanese.classList.add('japanese')
		    div.appendChild(japanese);

		    let year = document.createElement('h2');
		    year.innerText = response[i].release_date;
		    year.classList.add('year')
		    div.appendChild(year);

		    let description = document.createElement('p');
		    description.classList.add('description')
		    description.innerText = response[i].description;
		    div.appendChild(description);
		}

        let input = document.getElementById('search');
        input.addEventListener("input", function(){

           response.filter((element)=>!element.title.toLowerCase().includes(event.target.value.toLowerCase()))
           .forEach((element)=> {
           	let index = response.findIndex(x=> x.title === element.title);
           	document.getElementById(index+1).style.display = 'none'
           });

           response.filter((element)=>element.title.toLowerCase().includes(event.target.value.toLowerCase()))
           .forEach((element)=> {
           	let index = response.findIndex(x=> x.title === element.title);
           	document.getElementById(index+1).style.display = 'block'
           });

        })

	} catch(err) {
		console.log(err)
	}
}
