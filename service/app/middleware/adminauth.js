module.exports = (options, app) => {
  return async function adminauth(ctx, next) {
    console.log(ctx,"ctx");
    if (ctx.data.openId) {
      await next();
    } else {
      ctx.body = { data: "没有登录" };
    }
  };
};
