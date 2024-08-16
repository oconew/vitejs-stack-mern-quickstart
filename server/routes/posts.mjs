// Get a list of 50 posts
import express from 'express'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const router = express.Router()

router.get('/', async (req, res) => {
  // return the first 50 products
  //   res.send('<p>TEST</p>')
  const collection = await db.collection('products')
  const results = await collection.find({}).limit(50).toArray()
  res.json(results).status(200)
})

router.get('/:id', async (req, res) => {
  // get all products of a given category
  const collection = await db.collection('products')
  const results = await collection.find({ category: req.params.id }).toArray()
  console.log(req.params.id)
  if (!results) res.send('Not found').status(404)
  else res.json(results).status(200)
})

export default router
