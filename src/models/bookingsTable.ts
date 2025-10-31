import {pool} from '../db.js'
import type {Booking} from '../types/index.d.ts'

export default async function findBooking(event_id: number, user_id: number): Promise <Booking | undefined> {
	try{
		const result = await pool.query<Booking>('SELECT * FROM bookings WHERE user_id=$1 AND event_id=$2', [user_id, event_id])
		return result.rows[0]
	}
	catch (err){
		console.error(err)
		return undefined
	}
}