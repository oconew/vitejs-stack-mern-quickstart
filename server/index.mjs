import express from 'express'
import cors from 'cors'

import db from './db/conn.mjs'
import './loadEnvironment.mjs'
// import 'express-async-errors'
import posts from './routes/posts.mjs'

//const PORT = process.env.PORT || 5050
const PORT = 80
const app = express()
import * as path from 'path'
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(process.cwd() + "/../client/dist")))
// Load the /posts routes
app.use('/posts', posts)

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send('Uh oh! An unexpected error occured.')
        console.log(err)
})

app.get('/*',function (req, res) {
	//	res.send("<p>poopity scoop</p>")
	res.sendFile(path.resolve(process.cwd() + "/../client/dist/index.html"))

	// res.sendFile('/client/dist/index.html')
});
// app.get('/', async (req, res) => {
//   // res.send('<p>TEST</p>')
//   let collection = await db.collection('products')
//   let results = await collection.find({ category: 'gin' }).limit(5).toArray()
//   // res.send('<p>TEST</p>')
//   console.log('Running')
//   console.log(results)
//   await res.send(results + 'Test').status(200)
// })

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

// import cors from 'cors'
// import 'dotenv/config'
// import './db/conn.mjs'

// app.use(cors())
// app.use(express.json())
