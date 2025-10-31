import {Request, Response, NextFunction} from 'express'
import findEvent from '../models/events.js' 
import findBooking from '../models/bookingsTable.js'
import createBooking from '../transaction/createBooking.js'

export default async function reserveSeat(req: Request, res: Response, next: NextFunction){
	console.log(req.body)
	const event_id = req.body.event_id
	const user_id = req.body.user_id

	if(!event_id || !user_id)
		 return res.status(400).json('incorrect data')

	const event = await findEvent(Number(event_id))
	if (!event)
		return res.status(400).json('event dont exist')
	if (event.total_seats == 0)
		return res.status(300).json('event havent free places')

	const booking = await findBooking(Number(event_id), Number(user_id))
	if (booking){
		console.log('booking already exist')
		return res.status(300).json('booking already exist')
	}
	else{
		const createdBooking = await createBooking(Number(event_id), Number(user_id))
		if(createdBooking)
			return res.status(200).json('booking was created')
		else
			return res.status(500).json('something walk wrong')
	}
}
