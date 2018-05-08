import React from "react";
import SearchForm from '../components/SearchForm'
import Button, { ButtonGroup } from "@atlaskit/button";
import SelectListTable from "../components/SelectListTable";

import applicationNames from "../data/database-select-data"
import applicationTablenames from "../data/application-tablenames"

let style = {
  collapse: {
    fontSize: "2.0em",
    position: "absolute",
    right: "20px",
    top: "15px",
    display: "block"
  },
  mainContainer: {
    width: "300px"
  },
  selectContainer: {
    width: "100%",
    height: "100%"
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 20px 0px 0px'
  },
  buttonStyle: {
    position: "relative",
    float: "right"
  },
  actionContainer: {
    margin: '10px 5px 10px 5px'
  }
};

class CollapsibleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  toggle = () => {
    console.log("toggle");
    this.setState({ collapse: !this.state.collapse });
  };

  onSelectChange = () => {

  }

  render() {
    let { collapse } = this.state;
    let cn = collapse ? "collapse" : "collapse show";
    console.log("cn=" + cn);

    let indicator = collapse ? "fa fa-caret-right" : "fa fa-sort-down";

    return (
      <div className="container-fluid">
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  onClick={this.toggle}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className={indicator} style={style.collapse} />{this.props.cardTitle}
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className={cn}
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
                 {...this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


let onSelectChange = () => {

}

const FilterPaneCollapsibleExample = () => (
  <div classNameName="container" style={style.mainContainer}>
    <h2>Filter Pane Example</h2>
    <div classNameName="btn-group">
      <a href="/" classNameName="btn btn-default">
        Home
      </a>
    </div>
    <div className='row' >
      <div className='col' >
        <SearchForm />
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <CollapsibleCard cardTitle={'Databases'}>   
          <div style={style.selectContainer}>
            <SelectListTable 
              data={applicationNames} onSelectChange={onSelectChange} />
          </div>
        </CollapsibleCard>
        <CollapsibleCard cardTitle={'Table Names'}>
          <div style={style.selectContainer}>
            <SelectListTable data={applicationTablenames} onSelectChange={onSelectChange} />
          </div>
        </CollapsibleCard>
        <div className='container' style={style.actionContainer} >
          <div className='row'>
            <div className="col col-sm-8">
              <ButtonGroup >
                <div className='btn btn-sm btn-primary' >Reset</div>
              </ButtonGroup>
            </div>
            <div className="col col-sm-4" style={style.buttonBar}>
              <ButtonGroup>
                <div className='btn btn-sm btn-primary' >Apply</div>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FilterPaneCollapsibleExample;
