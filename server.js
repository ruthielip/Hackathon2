const exp = require('express');
const cors = require('cors');
const env = require('dotenv');
const fs = require('fs');
const path = require('path');
const DB = require('./modules/db')

const app = exp();
env.config();

app.use(cors());
app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.use('/', exp.static(__dirname + '/public'));

const usersFile = __dirname + '/users.json';

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/login.html')
})

app.get('/signup', (req, res)=>{
	res.sendFile(__dirname + '/signup.html')
})

app.get('/homepage', (req, res)=>{
	res.sendFile(__dirname + `/homepage.html?data=${dataSend}`)
})

app.post('/signup', (req, res)=>{
	DB.checkUsers()
	.then(users=>{
		res.json(users)
		for(let i = 0; i<users.length; i++){
			if(req.body.username === users[i].username || req.body.email === users[0].email){
				console.log('wrong')
				return;
			} else {
	            DB.newUser(req.body.name, req.body.email, req.body.username, req.body.password)
	            .then(row => {
	            	res.json(row)
	            })
	            .catch(err => {
	            	console.log(err)
	            })
	            return;
			}
		}
	})
	.catch(err=>{
		console.log(err)
	})
})

app.post('/login', (req, res)=>{
	DB.userData()
	.then(users => {
		res.json(users)
		for(let i = 0; i<users.length; i++){
            if(req.body.username === users[i].username){
            	console.log('login success!')
            	return;
            }
		}
	})
	.catch(err=>{
		console.log(err)
	})
})

app.listen(process.env.PORT, ()=>{
	console.log(`listening on port ${process.env.PORT}`)
})
