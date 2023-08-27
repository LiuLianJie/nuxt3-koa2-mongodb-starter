import koa from "koa"
import Router from "koa-router"
import TestController from "../controllers/test.js"
import { config } from "../config/index.js"

const testRouter = new Router({
  prefix: `/api/test`
})

export default (app: koa) => {
  testRouter.get("/", (ctx) => {
    ctx.body = "test"
  })
  app.use(testRouter.routes())
}
