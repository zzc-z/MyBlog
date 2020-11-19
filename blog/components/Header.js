import React, { useState, useEffect } from "react";
import "../styles/components/header.css";
import { Row, Col, Menu, Icon } from "antd";
import Link from "next/Link";

const { SubMenu } = Menu;

const Header = () => {
  handleClick = (e) => {
    // console.log("click ", e);
    // this.setState({
    //   current: e.key,
    // });
  };

  return (
    <div className="header">
      <Row style={{ height: "100%" }}>
        <Col span="8">
          <img className="imgs" src="/static/qqq.png" alt="my image" />
        </Col>
        <Col style={{ backgroundColor: "red" }} span="16">
          {/* <ul className="tags">
                <li>
                  <Link href={{ pathname: "/" }}>
                    <a>
                      <Icon type="home" style={{ marginLeft: "0" }} />
                      <span>首页</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/favorites" }}>
                    <a>收藏</a>
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/life" }}>
                    <a>生活</a>
                  </Link>
                </li>
                <li>
                  <a>主题</a>
                </li>
              </ul> */}
          <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="mail">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
            <Menu.Item key="alipay">
              <Icon type="mail" />
              Navigation Four - Link
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
