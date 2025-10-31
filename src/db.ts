import pgk from 'pg'
const {Pool} = pgk
import dotenv from 'dotenv';
dotenv.config()

export const pool = new Pool({
	host: process.env.DB_HOST, 
	port: process.env.DB_PORT? Number(process.env.DB_PORT) : undefined, 
	database: process.env.DB,
	user: process.env.USER, 
	password: process.env.PASS 
	//pool_mode: 'session'
})

pool.on('connect', () => console.log('Connected to PostgreSQL'));
pool.on('error', (err) => console.error('DB error:', err.stack));
