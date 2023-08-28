import Koa from "koa"
import Router from "koa-router"
import AdminController from "../controllers/admin.js"

// GET /admin/tokens
const adminRouter = new Router({
  prefix:'/api/admin'
})

export default (app: Koa) => {
  adminRouter.get("/tokens", AdminController.getToken)
  adminRouter.post("/users", AdminController.createUser)
  adminRouter.get("/auth", AdminController.auth)
  app.use(adminRouter.routes())
}