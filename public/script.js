let output = document.getElementById('output');

let emailTaken = document.createElement('p');
emailTaken.innerText = 'Account with that email already exists';
emailTaken.classList.add('wrong-info');
output.appendChild(emailTaken);

let usernameTaken = document.createElement('p');
usernameTaken.innerText = 'Username already in use';
usernameTaken.classList.add('wrong-info');
output.appendChild(usernameTaken);


function signUp(event){
	event.preventDefault()

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let submit = document.getElementById('submit');

	fetch('http://localhost:5000/signup', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({name, email, username, password})
	})
	.then(res=> res.json())
	.then(data=>{
		for(let i =0; i<data.length; i++){
			if(username === data[i].username){
				console.log('username already in use')
				emailTaken.style.display = 'none';
				usernameTaken.style.display = 'none';
				usernameTaken.style.display = 'block';
				return;
			} else if (email === data[i].email){
				console.log('account with that email already exists')
				usernameTaken.style.display = 'none';
				emailTaken.style.display = 'none';
				emailTaken.style.display = 'block';
				return;
			} else {
				   let dataSend = username;
					 console.log(dataSend)
				   window.location.href=`/homepage.html?data=${dataSend}`;
					 window.location.href=`/homepage.html?data=${dataSend}`;
					 return;
			}
		}

	})
	.catch(err=> console.log(err))
	// event.target.reset();
}


let wrongInfo = document.createElement('p');
wrongInfo.innerText = 'Wrong username or password';
wrongInfo.classList.add('wrong-info');
output.appendChild(wrongInfo);

let noAccount = document.createElement('p');
noAccount.innerText = 'Account does not exist';
noAccount.classList.add('wrong-info');
output.appendChild(noAccount);

function logIn(event){
	event.preventDefault();

	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let output = document.getElementById('output');
	let submit = document.getElementById('submit');

	fetch('http://localhost:5000/login', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({username, password})
	})
	.then(res=> res.json())
	.then(data=>{
		for(let i =0; i<data.length; i++){
			if(username === data[i].username && password === data[i].user_password){
			    let dataSend = data[i].username;
			    window.location.href=`/homepage.html?data=${dataSend}`;
                window.location.href=`/homepage.html?data=${dataSend}`;
                // console.log(data[i].username)
			    return;
			} else if(username === data[i].username || password === data[i].user_password){
				noAccount.style.display = 'none';
				wrongInfo.style.display = 'none';
				wrongInfo.style.display = 'block';
				return;
			} else {
				wrongInfo.style.display = 'none';
				noAccount.style.display = 'none';
				noAccount.style.display = 'block';
			}

		}
	})
	.catch(err=> console.log(err))
	event.target.reset();
}
