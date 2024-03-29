import React from "react";
import axios from "axios";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import servicePath from "../config/api.js";

const index = (contentList) => {
  return (
    <div>
      <Header />
      {/* <Content contentList={contentList} /> */}
      <ul style={{ marginTop: "150px" }}>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
      </ul>
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
  return await promise;
};

export default index;
