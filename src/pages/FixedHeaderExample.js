import React from "react";
import FixedHeaderTable from '../components/FixedHeaderTable'

const FixedHeaderExample = () => (
  <div className="container">
    <h2>FixedHeaderExample</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">
        Home
      </a>
    </div>
    <FixedHeaderTable />
  </div>
);

export default FixedHeaderExample;
