import Koa from "koa"
import Mongodb from "mongodb"

export interface UserModel {
  username: string,
  password: string
}

const createUser = async (ctx: any) =>{
  try {
    const userPassword = {
      username: "admin",
      password:"123456"
    }
    
    const db: Mongodb.Db = ctx.db;
    // 插入数据到名为 "users" 的集合中
    const usersCollection: Mongodb.Collection<Mongodb.BSON.Document> = db.collection('users')
    await usersCollection.insertOne (userPassword)

    console.log("User password inserted successfully")
    
  }
  catch(err){
    console.error("Error connecting to MongoDB:", err)
  }
}

const getUser = async (ctx: any, user: UserModel ) => {
  try{
    const db: Mongodb.Db = ctx.db;
    const usersCollection: Mongodb.Collection<Mongodb.BSON.Document> = db.collection('users')
    const document = await usersCollection.findOne({username:user.username, password: user.password});
    return document;
  }
  catch(err){
    console.error("Error connecting to MongoDB:", err)
  }
}

export default {
  createUser,
  getUser
}