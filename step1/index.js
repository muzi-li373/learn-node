const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const { koaBody } = require("koa-body");
const json = require("koa-json");

const app = new Koa();
const router = new Router();

// 请求前缀
router.prefix("/api");

router.get("/", (ctx, next) => {
  // ctx.router available
  ctx.body = "Hello World";
});

router.get("/api", (ctx, next) => {
  // ctx.router available
  ctx.body = "Hello api";
});

router.get("/async", async (ctx, next) => {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello async two seconds later");
    }, 2000);
  });
  ctx.body = result;
});

router.post("/post", async (ctx) => {
  let { body } = ctx.request;
  ctx.body = {
    ...body,
  };
});

// 浏览器输入 http://localhost:3000/api/get?name=1&age=2&pretty
router.get("/get", async (ctx) => {
  const params = ctx.request.query; // 获取get请求参数
  ctx.body = {
    name: params.name,
    age: params.age,
  };
});

app.use(koaBody());
app.use(cors());
app.use(json({ pretty: false, param: "pretty" }));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
