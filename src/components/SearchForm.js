import React from "react";
import './SearchForm.css'

const style = {
  container: {
    padding: '0px 10px 0px 0px'
  }
}

const SearchForm = (props) => (
  <div style={style.container} >
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Quick Search..." />
      <span>
        <i id="search-icon" className="fa fa fa-search" aria-hidden="true"></i>
      </span></div>
  </div>
)

export default SearchForm

  // < form id= 'custom-search-form' {...props } >
  //   <div className='input-append'>
  //     <input type='text' className='search-query' placeholder='Quick Search...' />
  //   </div>
  //   <a type='submit' id='search-button'><i className='fa fa-search' /></a>
  // </form >
