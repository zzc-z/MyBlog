import React from "react";
import Head from "next/head";
import { Row, Col, Icon, Breadcrumb, Affix } from "antd";
import Header from "../components/Header";
import "../styles/pages/detail.css";
import { CalendarTwoTone, FireTwoTone, StarTwoTone } from "@ant-design/icons";
import axios from "axios";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "../components/Tocify.tsx";
import servicePath from "../config/api.js";

export default function detail(props) {
  const renderer = new marked.Renderer();
  const tocify = new Tocify();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  //属性配置
  marked.setOptions({
    renderer: renderer,
    //启动类似github样式的markedong
    gfm: true,
    pedantic: false,
    //不忽略原始标签
    sanitize: false,
    //根据github样式输出表格 必须要跟gfm一起添加，否则样式失效
    tables: true,
    //github换行符
    breaks: false,
    //自动渲染列表
    smartLists: true,
    smartypants: false,
    //高亮显示
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  let html = marked(props.article_content);

  return (
    <div className="_nextbox">
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-mains" type="flex" justify="center">
        <Col className="comm-lefts" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>详细内容</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">{props.title}</div>
              <div className="list-icon center">
                <p>
                  {/* <CalendarTwoTone /> */}
                  2020-09-02
                </p>
                <p>
                  {/* <FireTwoTone /> */}
                  100万人
                </p>
                <p>
                  {/* <StarTwoTone /> */}
                  收藏
                </p>
              </div>

              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </Col>

        <Col className="comm-rights">
          <Affix offsetTop={60}>
            <div className="entry">
              <div className="centerContext">
                <h3 style={{ marginTop: "15px" }}>文章目录</h3>
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  );
}
detail.getInitialProps = async (context) => {
  console.log(context.query.id);
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then((res) => {
      resolve(res.data.data[0]);
    });
  });

  return await promise;
};
