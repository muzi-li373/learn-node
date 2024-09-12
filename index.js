const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
// const koaBody = require('koa-body');
const { koaBody } = require('koa-body');

 
const app = new Koa();
const router = new Router();



router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello World';
});


router.get('/api', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello api';
});


router.get('/async', async (ctx, next) => {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello async two seconds later');
    }, 2000);
  })
  ctx.body = result;
})


router.post('/post', async (ctx) => {
  console.log("🚀 ~ file: index.js:35 ~ router.post ~ ctx:", ctx)
  let { body } = ctx.request;
  console.log("🚀 ~ file: index.js:38 ~ router.post ~ body:", body)
  console.log("🚀 ~ file: index.js:38 ~ router.post ~ ctx.request:", ctx.request)
  ctx.body = {
    ...body
  }
  
})


app.use(koaBody());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)