import React from "react";
import "../styles/components/header.css";
import { Row, Col, Menu, Icon } from "antd";

export default function Header() {
  return (
    <div className="header">
      <Row align="middle">
        <Col
          span={8}
          style={{ fontSize: "36px", color: "white", lineHeight: "3.6rem" }}
        >
          Next~~~
        </Col>
        <Col span={16}>
          <Menu mode="horizontal" style={{ float: "right" }}>
            <Menu.Item key="home">
              <Icon type="home" />
              首页
            </Menu.Item>
            <Menu.Item key="heart">
              <Icon type="heart" />
              收藏
            </Menu.Item>
            <Menu.Item key="smile">
              <Icon type="smile" />
              生活
            </Menu.Item>
            <Menu.Item key="mail">
              <Icon type="skin" />
              主题
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}
