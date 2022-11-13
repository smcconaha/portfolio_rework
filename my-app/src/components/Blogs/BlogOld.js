
import React from "react";
import "./Blogs.css";
import "./../../node_modules/react-bootstrap"
import August22 from "./August22";
import September22 from "./September22";
import October22 from "./October22";
import November22 from "./November22";
import December22 from "./December22";

const Blog = () => {
  return (
    <div className = "container fluid p-md-5" id="blog-section">
      <div className ="container">
      <h2>Blog</h2>
      <Tabs
        defaultActiveKey="nov22"
        id="uncontrolled-tab-example"
        className=""
      >
        <Tab eventKey="dec22" title="December '22">
          <December22/>
        </Tab>
        <Tab eventKey="nov22" title="Most Recent">
          <November22/>
        </Tab>
        <Tab eventKey="oct22" title="October '22">
          <October22/>
        </Tab>
        <Tab eventKey="sep22" title="September '22">
          <September22/>
        </Tab>
        <Tab eventKey="aug22" title="August '22">
          <August22/>
        </Tab>
      </Tabs>
      </div>
    </div>
  )
}

export default Blog;