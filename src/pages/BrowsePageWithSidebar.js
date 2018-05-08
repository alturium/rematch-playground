import React from "react";
import Sidebar from "react-sidebar";
import Button from "@atlaskit/button";
import PropTypes from 'prop-types';
import ActionBar from '../components/ActionBar'
import ElementTable from "../components/ElementTable";
import DomainFilterPane from '../components/DomainFilterPane'

import elements from "../data/elements-domains.js";
import accessor from '../data/elements-domains-accessor.js'

const { bool } = PropTypes;

const rootStyles = {
  root: {
    position: "relative",
    top: 0,
    height: "100%",
    // height: '600px',
    padding: "2px 2px 2px 2px",
    // border: "1px solid #FF0000",
    overflow: "hidden"
  },
  sidebar: {
    width: "350px"
  },
  content: {
    position: "relative",
    // height: '600px',
    height: "100%",
    //width: '100%',
    padding: "0px 0px 0px 0px",
    // border: "1px solid #0000FF"
  }
};

const DataFilterPanel = () => (
  <div>
    <h5>Filter Panel</h5>
  </div>
);

const DataHeader = props => {
  let indicator = props.isOpen ? "fa fa-chevron-left" : "fa fa-chevron-right";
  return (
    <div>
      <Button onClick={props.onClick}>
        <strong> Options </strong>
        <i className={indicator} aria-hidden />
        <i className={indicator} aria-hidden />
      </Button>
    </div>
  );
};

const OldBrowsePageWithSidebar = () => (
  <div className="container">
    <h2>Browse With Sidebar</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">
        Home
      </a>
    </div>
    <ElementTable data={elements} history={this.props.history} />
  </div>
);

class BrowsePageWithSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "browse-top",
      sidebarOpen: false,
      sidebar: null,
      docked: false,
      open: false,
      onSetOpen: null
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
  }

  componentDidUpdate() {
    // $('.toggleInput').bootstrapToggle()
  }

  static propTypes = { hasApplicationBootstrapped: bool };

  handleViewSidebar() {
    let sidebarOpen = !this.state.sidebarOpen;
    this.setState({ sidebarOpen: sidebarOpen });
    this.setState({ open: sidebarOpen, docked: sidebarOpen });
  }

  render() {
    let sidebarProps = {
      sidebar: <DomainFilterPane />,
      docked: this.state.docked,
      open: this.state.open,
      styles: rootStyles
    };

    let MainBrowseView = props => (
      <div>
        <DataHeader onClick={props.onClick} isOpen={props.isOpen} />
        <Sidebar {...sidebarProps}>
          <div className='container-fluid' >
            <ActionBar />
            <ElementTable data={elements} accessorInfo={accessor} history={this.props.history} />
          </div>
        </Sidebar>
      </div>
    );

    return (
      <div>
        <h2>Browse</h2>
        <div className="btn-group">
          <a href="/" className="btn btn-default">
            Home
          </a>
        </div>
        <MainBrowseView
          onClick={this.handleViewSidebar}
          isOpen={this.state.open}
        />
      </div>
    );
  }
}

export default BrowsePageWithSidebar;
