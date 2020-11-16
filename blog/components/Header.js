import React from "react";
import "../styles/components/header.css";
import { Row, Col, Menu, Icon } from "antd";
import Link from 'next/Link'

const { SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <Row style={{ height: "100%" }}>
          <Col className="left" flex={1.5}>
            <img className="imgs" src="/static/qqq.png" alt="my image" />
          </Col>
          <Col className="right" flex={3.5}>
            <div className="rightnva">
              <ul className="tags">
                <li>
                  <Link href={{ pathname: "/" }}>
                    <a>首页</a>
                  </Link>
                </li>
                <li>
                  <a>收藏</a>
                </li>
                <li>
                  <a>生活</a>
                </li>
                <li>
                  <a>主题</a>
                </li>
              </ul>
              {/* <div className="tags">
                <Menu
                  mode="horizontal"
                >
                  <Menu.Item key="alipay">
                    <a
                      href="https://ant.design"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Navigation Four - Link
                    </a>
                  </Menu.Item>
                </Menu>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
