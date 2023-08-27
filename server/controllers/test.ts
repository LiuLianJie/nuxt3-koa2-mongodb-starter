'use strict'

import Koa from "koa"
import TestService from "../services/test.js"

const test = async (ctx: Koa.Context) => {
  ctx.body = "test"
}

export default {
  test
}