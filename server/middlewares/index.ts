'use strict'
import routes from "./routes.js"
import mongodb from "./mongodb.js"
import parser from "./parser.js"

export default (app: any) => {
  mongodb(app)
  parser(app)
  routes(app)
}

