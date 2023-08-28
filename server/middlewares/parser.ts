import bodyParser from 'koa-bodyparser';

export default (app: any) => {
  // The parsed body will store in ctx.request.body
  // If noting was parsed, body will be an empty object ()
  console.log("use bodyParser");
  //app.use(koaBody.koaBody())
  //console.log("koaBody:", koaBody);
  app.use(bodyParser());
}