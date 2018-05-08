import React from "react";
import ElementList from '../components/ElementList'
import ElementTable from "../components/ElementTable"
import ObjectSummaryPanel from '../components/ObjectSummaryPanel'



import elementData from "../data/elements-domains.js";
import elementAccessorInfo from '../data/domain-summary-decorator.js'

import testData from "../data/elements-domains.js";
import accessorTest from "../data/elements-domains-accessor";

const data = {
  summary: elementData[0],
  summaryDecorator: elementAccessorInfo,
  elements: testData,
  elementDecorator: accessorTest
}

const ObjectSummaryView = () => (
  <div className="container">
    <div className="btn-group">
      <a href="/" className="btn btn-default">Home</a>
    </div>
    <ObjectSummaryPanel data={data} />
  </div>
);

export default ObjectSummaryView;