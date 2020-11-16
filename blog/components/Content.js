import React, { useState } from "react";
import "../styles/components/Content.css";
import { Row, Col, Link } from "antd";
import Contentbody from "./Contentbody";
import Card from "./card";
import Advert from "./Advert";

const Content = (contentList) => {
  const [mylist, setMylist] = useState(contentList.contentList);
  return (
    <div className="content">
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {mylist.data.map((item, index) => (
            <Contentbody
              key={index+item}
              id={item.id}
              title={item.title}
              introduce={item.introduce}
              typeName={item.typeName}
              addTime={item.addTime}
            />
          ))}
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Card />
          <Advert />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
