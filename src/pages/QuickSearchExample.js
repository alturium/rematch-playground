import React from "react";
import SearchForm from '../components/SearchForm'

const style = {
  searchContainer: {
    width: '200px'
  }
}

const QuickSearchExample = () => (
  <div className="container" style={style.searchContainer} >
    <div className="row">
      <div className="col">
        <h2>QuickSearchExample</h2>
        <div className="btn-group">
          <a href="/" className="btn btn-default">
            Home
          </a>
        </div>
        <SearchForm />
        <p>More Text</p>
      </div>
    </div>
  </div>
);

export default QuickSearchExample;
