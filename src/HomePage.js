import React from "react";
import Footer from "./Footer";
import Button, { ButtonGroup } from "@atlaskit/button";
import Checkbox from '@atlaskit/checkbox'

const style = {
  buttonBar: {
    display:'flex',
    justifyContent: 'flex-end'
  },
  buttonStyle: {
    position: "relative",
    float: "right"
  }
};

const RowItem = (props:any) => (
  <div className='row'>
    <div className='col col-sm-1' style={{ justifyContent: 'left'}}>
      {...props.children}
    </div>
  </div>
)

const HomePage = () => (
  <div className="container">
    <div className='container-fluid'>
      <div className='row py-3'>
          <h4>Page Examples </h4>
      </div>
      <RowItem > 
        <a href="/browse-sidebar" className="btn btn-default">Browse</a>
      </RowItem > 
      <div className='row py-3'>
        <h4>Other Examples </h4>
      </div>
      <div className='h-100' >
        <RowItem >
          <a href="/count-container" className="btn btn-default">Count Container (Rematch example)</a>
        </RowItem > 
      </div>
      
    <Footer />
  </div>
  </div>
);

export default HomePage;