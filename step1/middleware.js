const Koa = require('koa');
const app = new Koa();

const middleware = async (ctx, next) => {
  // add by zoo-vscode-extension snippets
  console.log('this.middleware',);
  console.log('ctx.request.path :', ctx.request.path);
  next()
}

const middleware1 = async (ctx, next) => {
  // add by zoo-vscode-extension snippets
  console.log('this.middleware1',);
  console.log('ctx.request.path :', ctx.request.path);
  next()
}


const middleware2 = async (ctx, next) => {
  // add by zoo-vscode-extension snippets
  console.log('this.middleware2');
  console.log('ctx.request.path :', ctx.request.path);
  next()
}


app.use(middleware);
app.use(middleware1);
app.use(middleware2);
app.listen(3000);