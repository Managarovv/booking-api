import {pool} from '../db.js'


export default async function createBooking(event_id: number, user_id: number): Promise <true | false> {
	const client = await pool.connect()
	const date = new Date()
	try{
		await client.query('BEGIN')

		await client.query('INSERT INTO bookings (event_id, user_id, created_at) VALUES($1, $2, $3)', [event_id, user_id, date])

		await client.query('UPDATE events SET total_seats = total_seats -1 WHERE id = $1', [event_id])

		await client.query('COMMIT')

		return true
	}
	catch(e){
		console.error(e)
		await client.query('ROLLBACK')
		return false
	}
	finally{
		client.release()
	}
}
