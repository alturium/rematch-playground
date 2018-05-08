import _ from "lodash";
import React from "react";
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import ReactTable from "react-table";
import "react-table/react-table.css";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import './SelectListTable.css'

// important:  
// 1. need the css settings and the defaultPageSize={rowCount} for the vertical bar to appear
// 2. embedding the table inside a container here hides the vertical scrollbar
// 3. solution (work around for scrollbar) : https://github.com/react-tools/react-table/issues/495

const CheckboxTable = checkboxHOC(ReactTable);

const style = {
  checkboxTable: {
    width: '100%',
    height: '100%'
  }
}
/*
 * Requirement:
 *    data elements have { _id, selected, item } format.
 */

class SelectListTable extends React.Component {
  constructor(props) {
    super(props)
    const {data, rowCount } = props
    const columns = this.getColumns(data)
  
    this.state = {
      rowCount,
      data,
      columns,
      selection: [],
      selectAll: false
    };
    this.getColumns = this.getColumns.bind(this);
  }

  componentDidMount() {
      let thead = ReactDOM.findDOMNode(this.checkboxTable).getElementsByClassName("rt-thead")[0];
      let tbody = ReactDOM.findDOMNode(this.checkboxTable).getElementsByClassName("rt-tbody")[0];

       tbody.addEventListener("scroll", () => {
         thead.scrollLeft = tbody.scrollLeft;
       });
  }

  componentDidUpdate() {
    let thead = ReactDOM.findDOMNode(this.checkboxTable).getElementsByClassName("rt-thead")[0];
    let tbody = ReactDOM.findDOMNode(this.checkboxTable).getElementsByClassName("rt-tbody")[0];

    if (tbody.scrollHeight > tbody.clientHeight) {
      thead.classList.add("vertical-scrollbar-present");
    }
    else {
      thead.classList.remove("vertical-scrollbar-present");
    }
  }

  getColumns(data) {
    const columns = [];
    if (!_.isEmpty(data)) {
      const sample = data[0];
      Object.keys(sample).forEach(key => {
        if (key !== "_id" && key !== "selected") {
          columns.push({
            accessor: key,
            Header: '',   /* column title */
            resizable: false
          });
        }
      });
    }
    return columns;
  }

  toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });

    this.props.onSelectChange(selection); // Lift state up to parent component
  };

  toggleAll = () => {
    /*
      'toggleAll' is a tricky concept with any filterable table
      do you just select ALL the records that are in your data?
      OR
      do you only select ALL the records that are in the current filtered data?
      
      The latter makes more sense because 'selection' is a visual thing for the user.
      This is especially true if you are going to implement a set of external functions
      that act on the selected information (you would not want to DELETE the wrong thing!).
      
      So, to that end, access to the internals of ReactTable are required to get what is
      currently visible in the table (either on the current page or any other page).
      
      The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
      ReactTable and then get the internal state and the 'sortedData'. 
      That can then be iterrated to get all the currently visible records and set
      the selection state.
    */
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach(item => {
        selection.push(item._original._id);
      });
    }
    this.setState({ selectAll, selection });
    this.props.onSelectChange(selection); // Lift state up to parent component
  };

  isSelected = key => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  };

  logSelection = () => {
    console.log("selection:", this.state.selection);
  };

  render() {
    const { toggleSelection, toggleAll, isSelected, rowCount } = this;
    const { data, columns, selectAll } = this.state;
    // crucial for the vertical scroll bar to show:
    //const rowCount = rowCount; // (_.isEmpty(data))? 0 : data.length

    const checkboxProps = {
      noDataText: "No rows found",
      showPaginationBottom: false,
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: "checkbox",
      getTheadThProps: (s, r, c) => {
        if (c.id === "_selector") {
          return {
            style: {
              textAlign: "center"
            }
          };
        } else {
          return {
            style: {
              textAlign: "left"
            }
          };
        }
      },
      getTrProps: (s, r) => {
        // someone asked for an example of a background color change
        // here it is...
        if (!_.isUndefined(r) && !_.isUndefined(r.original)) {
          const selected = this.isSelected(r.original.id);
          return {
            style: {
              backgroundColor: selected ? "lightblue" : "inherit",
              padding: "0px 0px 0px 0px",
              height: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
              // color: selected ? 'white' : 'inherit',
            }
          };
        } else {
          return {
            style: {
              backgroundColor: "inherit"
            }
          };
        }
      }
    };

    return (
        <CheckboxTable
          ref={r => (this.checkboxTable = r)}
          data={data}
          columns={columns}
          defaultPageSize={rowCount}
          className="-striped -highlight"
          {...checkboxProps}
          style={style.checkboxTable}
        />
    );
  }
}

SelectListTable.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default SelectListTable;
