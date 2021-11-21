const knex = require('knex');
const env = require('dotenv');

env.config({path:'./.env'})

const db = knex({
	client: 'pg',
	connection: {
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME
	}
})

function newUser(name, mail, user, password){
	return db('users')
	.insert({
		fullname: name,
		email: mail,
		username: user,
		user_password: password
	})
	.returning('*')
}

function checkUsers(){
	return db('users')
	.select('fullname', 'email', 'username', 'user_password')
	.returning('*')
}

function userData(){
	return db('users')
	.select('username', 'user_password')
	.returning('*')
}

module.exports = {
	newUser,
	userData,
	checkUsers
}