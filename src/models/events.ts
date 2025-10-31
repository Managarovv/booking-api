import {pool} from '../db.js'
import type	{Event} from '../types/index.d.ts'

export default async function findEvent(event_id: number): Promise <Event | undefined>{
	console.log('finding...')
	try{
		const result = await pool.query<Event>('SELECT * FROM events WHERE id = $1', [event_id])
		console.log(result.rows)
		if (result.rows.length == 0)
			return undefined
		else
			return result.rows[0]
	}catch (err){
		console.error(err)
		return undefined
	}
	
}
