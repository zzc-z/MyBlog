module.exports = (app) => {
  let { router, controller } = app;
  const adminauth =  app.middleware.adminauth()
  router.get("/admin/index", controller.admin.main.index);
  router.post("/admin/checkLogin", controller.admin.main.checkLogin);
  router.get("/admin/getTypeInfo", controller.admin.main.getTypeInfo)
  router.post("/admin/addArticle", controller.admin.main.addArticle);
};
