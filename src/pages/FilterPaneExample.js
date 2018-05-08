import React from "react";
import Collapsible from 'react-collapsible'
import './Collapsible.css'
import FilterPane from '../components/FilterPane'

const FilterPaneExample = () => (
  <div className="container">
    <h2>Filter Pane Example</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">Home</a>
    </div>
    <FilterPane />
  </div>
);

export default FilterPaneExample;
