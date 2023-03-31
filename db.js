const { MongoClient } = require('mongodb')
import { DB_NAME } from "./setup/index.js"

let dbConnection

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(`mongodb://localhost:37017/${DB_NAME}`)
    .then((client)=>{
      dbConnection = client.db()
      return cb
    }).catch(err =>{
      console.log(err)
      return cb(err)
    })
    getDb:() => dbConnection
  }
}


