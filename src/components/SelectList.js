import React, { PureComponent } from "react";
import Checkbox from "@atlaskit/checkbox";
import "./SelectList.css";

const style = {
  panel: {
    height: "200px",
    //height: '100%',
    overflow: "scroll",
    border: "0"
  },
  tableStyle: {
    height: "0.5em",
    border: "0"
  },
  bodyStyle: {
    border: "0"
  },
  rowStyle: {
    lineHeight: "10px",
    padding: "0px 0px 0px 0px"
  },
  columnStyle: {
    verticalAlign: "middle",
    padding: "0px 0px 0px 0px"
  },
  column1: {
    verticalAlign: "middle",
    padding: "0px 0px 0px 0px",
    width: "30px"
  },
  column2: {
    verticalAlign: "middle",
    padding: "0px 0px 0px 0px"
  },
  checkbox: {
    marginBottom: "0px",
    padding: "0px 0px 0px 0px",
    border: "1px solid red"
  }
};

// 'type' is a flow static checker
type State = {
  onChangeResult: string
};

const ItemTableRow = props => (
  <tr style={style.rowStyle}>
    <td style={style.column1}>
      <Checkbox
        style={style.checkbox}
        value=""
        label=""
        onChange={props.onChange}
        name="checkbox-basic"
      />
    </td>
    <td style={style.column2}>{props.item}</td>
  </tr>
);

const SelectList = class extends PureComponent<void, State> {
  state = {
    onChangeResult: "Check & Uncheck to trigger onChange"
  };

  onChange = (event: any) => {
    this.setState({
      onChangeResult: `onChange called with value: ${event.value} isChecked: ${
        event.isChecked
      }`
    });
  };

  render() {
    return (
      <div className="container">
        <Checkbox
          style={style.checkbox}
          value=""
          label="Select All"
          name="checkbox-basic"
        />
        <div className="panel" style={style.panel}>
          <table
            className="table table-hover table-sm table-borderless "
            style={style.tableStyle}
          >
            <thead>
              <tr />
            </thead>
            <tbody>
              {this.props.data.map(i => <ItemTableRow item={i.item} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default SelectList;
