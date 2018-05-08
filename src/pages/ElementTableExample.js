import React from "react";
import ElementTable from '../components/ElementTable'

import elements from "../data/elements-domains.js";
import accessor from '../data/elements-domains-accessor.js'

const style = {
  container: {
    height: '400px'
  }
}

const ElementTableExample = () => (
  <div className="container" style={style.container} >
    <h2>ElementTableExample</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">
        Home
      </a>
    </div>
    <ElementTable data={elements} accessorInfo={accessor} />
  </div>
);

export default ElementTableExample;