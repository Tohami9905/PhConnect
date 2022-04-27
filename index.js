import express from 'express'
import bodyParser from 'body-parser'
import drugsRoutes from './routes/drugs.js'
import path from 'path'
import fs  from 'fs'
import csv from 'csv-parser' 

let results = []

const app = express()
const PORT = 5000

app.use(bodyParser.json());
app.use('/drugs',drugsRoutes)

app.get('/',(req,res)=>{
	res.send("hello")
})

//prepare the database
app.listen(PORT,()=>{
	console.log(`http://localhost:${PORT}`)
	fs.createReadStream('data.csv')
	.pipe(csv({}))
	.on('data',(data)=> results.push(data))
	.on('end',()=>{
	console.log("database is set and ready to run");

	

})
	
})

export default results;
