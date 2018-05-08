import React from "react";
import SelectListTable from "../components/SelectListTable";
import SelectTableHoc from "../components/SelectTableHoc";

const data = [
  {
    _id: 1,
    selected: true,
    item: "application | tablename1"
  },
  {
    _id: 2,
    selected: true,
    item: "application | tablename2"
  }
];

const style = {
  selectContainer: {
    width: "50%",
    height: "200px"
  }
};

class SelectTableHocExample extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange = selections => {
    console.log("onSelectChange called, count:" + selections.length);
    this.setState({ count: selections.length });
  };

  render() {
    return (
      <div className="container-fluid">
        <h2>SelectTableHocExample</h2>
        <div className="btn-group">
          <a href="/" className="btn btn-default">
            Home
          </a>
        </div>
        <div className="card ">
          <p>Count of selected items: {this.state.count} </p>
        </div>
        <div style={style.selectContainer}>
          <SelectListTable data={data} onSelectChange={this.onSelectChange} />
        </div>
        <br />
        <SelectTableHoc />
      </div>
    );
  }
}

export default SelectTableHocExample;
