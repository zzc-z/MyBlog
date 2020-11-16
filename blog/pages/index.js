import React, { useState } from "react";
import axios from "axios";
import Background from "../components/Background";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import servicePath from "../config/api.js";

//主题颜色
// import DynamicAntdTheme from 'dynamic-antd-theme';

const index = (contentList) => {
  return (
    <div>
      <Header />
      <Background />
      <Content contentList={contentList} />
      <Footer />
    </div>
  );
};

index.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then((res) => {
      resolve(res.data);
    });
  });
  return await promise ;
};

export default index;
