import React from "react";
import TestTable from "../components/TestTable";

const BrowsePage = () => (
  <div className="container">
    <h2>Browse</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">Home</a>
    </div>
    <TestTable />
  </div>
);

export default BrowsePage;
