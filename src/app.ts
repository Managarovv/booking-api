import express,  {Request, Response} from 'express';
import bookings from './routes/bookings.js'
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//const host = process.env.HOST
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/bookings', bookings)

app.use(express.static(path.join(__dirname, 'static')))

app.use((req: Request, res: Response)=>{
	res.status(404).send('error: '+req.url+' cannot be found')
})

app.listen(port, function(){
	console.log('server run')
})