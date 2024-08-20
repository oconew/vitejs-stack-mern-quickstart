import { MongoClient } from 'mongodb'
const connectionString = process.env.ATLAS_URI || ''
// const client = new MongoClient(connectionString)
const client = new MongoClient(
  'mongodb+srv://oconew:Nm4pH6sktFyClcuy@cluster0.uln7zx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
)
let conn
try {
  conn = await client.connect()
} catch (e) {
  console.error(e)
}
//console.log(conn)
let db
if (conn) {
  db = conn.db('db')
} else {
  db = null
}
export default db

// import mongoose from 'mongoose'

// const connectionString = process.env.ATLAS_URI || ''

// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB')
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB', error)
//   })
