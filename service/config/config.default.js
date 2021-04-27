/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1599460479608_1055";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 数据库连接配置
  config.mysql = {
    // database configuration
    client: {
      // host
      host: "localhost",
      // port
      port: "3306",
      // username
      user: "root",
      // password
      password: "root",
      // database
      database: "react_blog",
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  //跨域设置
  config.security = {
    csrf: { enable: false },
    domainWhiteList: ["*"],
  };

  config.cors = {
    credentials: true,  // 允许Cook可以跨域
    origin: 'http://localhost:3000', //只允许这个域进行访问接口
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  config.session = {
    key: 'SESSION_ID',  // 设置session cookie里面的key
    maxAge: 1000*60*30, // 设置过期时间
    httpOnly: true,
    encrypt: true,
    renew: true         // renew等于true 那么每次刷新页面的时候 session都会被延期
  }

  return {
    ...config,
    ...userConfig,
  };
};
