import express from "express"
import { MongoClient } from "mongodb"
import { connectToDb, getDb } from './db.js'

import posts from "./data/posts.json" assert {type: 'json'}

const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: true }))

export const DB_NAME= "replace me with your database name"
export const COLLECTION_NAME= "replace me with your collection name"

let client = new MongoClient(`mongodb://localhost:37017/${DB_NAME}`)



//db connection
 let db = client.db()
connectToDb(()=>{
  if(!err){
    app.listen(PORT, () => {
      console.log(`the server is running on ${PORT}!`)
    })
    db = getDb()
  }
})


//GET POSTS
app.get("/posts", (req, res) => {

})

//GET ID PARAMETER
app.get("/posts/:postId", (req, res) => {
  //finds the specific postid then shares the post

})

//GET AUTHOR PARAMETER
app.get("/posts/author/:author", (req, res) => {
  //find all the comments posted by a specific author

})



//POST 
app.post("/posts", (req, res) => {
  //creates a new post and sends it to the main array

})



//DELETE
app.delete("/delete/:postId", (req, res) => {
  //deletes a post from the main array

})



//POST COMMENT ID
//creates a comment a person posted within the comment array
app.post("/posts/:postId/comments/", (req, res) => {

  
})



//GET COMMENTS ARRAY FROM SPECIFIC POSTER
//displays all the comment the poster has posted
app.get("/posts/:postId/comment/", (req, res) => {

})



//DELETES A COMMENT FROM A POST
app.delete("/posts/:postId/comment/:id", (req, res) => {

})


// ----------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}!`)
  //console.log(posts)
})
