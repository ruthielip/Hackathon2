-- -- -- Database: GhibliUsers

-- -- DROP DATABASE "GhibliUsers";

-- CREATE DATABASE "GhibliUsers"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
-- 	fullname VARCHAR(50) NOT NULL,
-- 	email VARCHAR(50) NOT NULL,
-- 	username VARCHAR (25) NOT NULL,
-- 	passowrd VARCHAR (25) NOT NULL	
-- )

-- ALTER TABLE users RENAME COLUMN passowrd TO user_password;

SELECT * FROM users;

