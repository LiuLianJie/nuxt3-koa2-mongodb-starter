'use strict'

import Koa from "koa"
import chalk from "chalk"
import moment from "moment"
import { config } from './config/index.js'
import middlewares from './middlewares/index.js'

import Router from "koa-router"

const router = new Router()

router.get("/", ctx => {
  ctx.body = 'hello'
})

router.post("/login", async (ctx) =>{
  ctx.body = "login post"
})

const init = async () => {
  const app = new Koa()
  const host = config.host
  const port = config.port

  middlewares(app)

  app.listen(port, () => {
    // Logging initialization
    console.log('--')
    console.log(
      chalk.green(
        `[${moment().format('YYYY-MM-DD HH:mm:ss')}] Server started on port http://localhost:${config.port}`
      )
    )
    console.log('--')
  })
}

init()