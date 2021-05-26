const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {

  if(ctx.url=="/"){
    ctx.body = '<h1>Welcome to index page</h1>';
  }
  else if(ctx.url=="/contact"){

    ctx.body = '<h1>Welcome to contact page</h1>';
  }
  else if(ctx.url=="/about"){

    ctx.body = '<h1>Welcome to about page</h1>';
  }
  else {
    ctx.body = '<h1>404 Not found</h1>';
  }
  
});

app.listen(3000);