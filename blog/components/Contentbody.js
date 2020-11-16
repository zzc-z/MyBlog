import React, { useState } from "react";
import { Row, Col } from "antd";
import "../styles/components/Contentbody.css";
import Link from 'next/Link'

const Contentbody = (contentList) => {
  const [mylist, setMylist] = useState(contentList);
  return (
    <div className="cards">
      <Row
        className="cardcontent"
        className="contents"
        type="flex"
        justify="center"
        align="middle"
      >
        <Col className="textbox">
          <div className="text">
            <h2>
              <Link href={{ pathname: "/detail", query: { id: mylist.id } }}>
                <a>{mylist.title}</a>
              </Link>
            </h2>
            <div className="details">{mylist.introduce}</div>
            <div className="bottoms">
              <div className="date">
                <time>日期:{mylist.addTime}</time>
              </div>
              <div className="label">
                <span>标签:{mylist.typeName}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contentbody;
