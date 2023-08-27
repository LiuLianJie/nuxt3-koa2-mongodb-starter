'use strict'

import Koa from "koa"
import chalk from "chalk"
import moment from "moment"
//import { config } from './config/index'
//import middlewares from './middlewares/index'

const init = async () => {
  const app = new Koa()
  const host = '0.0.0.0'
  const port = 3001

  app.use(async ctx => {
    ctx.body = "sssss";
  });

  app.listen(port, () => {
    // Logging initialization
    console.log('--')
    console.log(
      chalk.green(
        `[${moment().format('YYYY-MM-DD HH:mm:ss')}] Server started on port http://localhost:3001`
      )
    )
    console.log('--')
  })
}

init()