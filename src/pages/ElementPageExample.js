import React from "react";
import ActionBar from "../components/ActionBar"
import ElementList from '../components/ElementList'

import elementData from "../data/elements-domains.js";
import elementAccessorInfo from '../data/elements-domains-accessor.js'

const ElementPageExample = () => (
  <div className="container">
    <h2>ElementPageExample</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">
        Home
      </a>
    </div>
    <ActionBar />
    <ElementList data={elementData[0]} accessor={elementAccessorInfo} />
  </div>
);

export default ElementPageExample;
