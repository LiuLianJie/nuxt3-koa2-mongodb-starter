import Koa from "koa"
import Mongodb from "mongodb"

const MongoClient = Mongodb.MongoClient;

const mongoURI:string = 'mongodb://localhost:27017/homepage'


export default async (app: Koa) => {
  try {
    const client:Mongodb.MongoClient = await MongoClient.connect(mongoURI);
    const db:Mongodb.Db = client.db()
    console.log("Connected to MongoDB");
    
    app.context.db = db;
  }
  catch(err){
    console.error("Error connecting to MongoDB:", err)
  }
}