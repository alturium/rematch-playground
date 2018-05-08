import React from "react";
import ActionBar from '../components/ActionBar'

const ActionBarExample = () => (
  <div className="container">
    <h2>ActionBarExample</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">
        Home
      </a>
    </div>
    <ActionBar />
  </div>
);

export default ActionBarExample;
