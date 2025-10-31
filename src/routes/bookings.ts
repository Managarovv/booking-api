import {Router, Request, Response} from 'express'
import reserveSeat from '../controllers/bookingcontroller.js'

const router = Router()

router.route('/reserve')
	.get((req: Request, res:Response) => {
		res.send('api run')
	})
	.post(reserveSeat)

export default router
