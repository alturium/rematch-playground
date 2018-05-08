import React from "react";

let style = {
  collapse: {
    fontSize: "2.0em",
    position: "absolute",
    right: "20px",
    top: "15px",
    display: "block",
    transform: 'rotate(90deg)'    
  },
  open: {
    fontSize: "2.0em",
    position: "absolute",
    right: "20px",
    top: "15px",
    display: "block",
    transform: 'rotate(0deg)'
  },
  buttonLink: {
    color: '#505F79'
  }
}

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

    let indicator = "fa fa-caret-right";
    let indicatorStyle=(collapse)? style.collapse : style.open;

    return (
      <div className="container-fluid">
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <a
                  className="btn btn-link"
                  style={style.buttonLink}
                  onClick={this.toggle}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className={indicator} style={indicatorStyle} />{this.props.cardTitle}
                </a>
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

export default CollapsibleCard