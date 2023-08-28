import Koa from "koa"
import jwt from "jsonwebtoken"
import AdminServers from "../services/admin.js"
import { UserModel } from "../services/admin.js"
import { config } from "../config/index.js"

interface RequestBody {
  username: string,
  password: string
}

/**
 * get token
 * @param ctx koa Context
 */
const getToken = async (ctx: Koa.Context) =>{
  const requestBody: RequestBody = ctx.request.body as RequestBody
  const {username, password} = requestBody;

  const user: UserModel  = {
    username,
    password
  }

  let result;
  const doc = await AdminServers.getUser(ctx, user);
  if(doc){
    const payload = {
      username,
      role:"admin"
    }
  
    const token = jwt.sign(payload, config.session.secretKey, { expiresIn: '1h' })
    result = {code:200, message:"ok", data: token}
    ctx.status = 200;
  }else{
    result = {code:401, message:"error", data: ''}
    ctx.status = 401;
  }
  
  ctx.body = JSON.stringify(result);
}

interface authRequestBody {
  token: string
}
const auth = async (ctx: Koa.Context) => {
  const body: authRequestBody = ctx.request.body as authRequestBody
  const {token} = body;
  jwt.verify(token, config.session.secretKey, (err , decoded) =>{
    if(err){
      console.error('Token verification failed:', err.message)
    }else{
      console.log("token verified.", decoded)
    }
  })
}

const createUser = async (ctx: Koa.Context) => {
  await AdminServers.createUser(ctx);
  const result = {code:200, message:"createUser"}
  ctx.status = 200;
  ctx.body = JSON.stringify(result);
}

export default {
  getToken,
  createUser,
  auth
}