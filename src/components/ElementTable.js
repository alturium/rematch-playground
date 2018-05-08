import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./ElementTable.css"

const style = {
  containerTable: {
    width: '100%',
    height: '100%'
  }
}
/*
 * Requirement:
 *    data elements have { _id, selected, item } format.
 */

class ElementTable extends React.Component {
  constructor(props) {
    super()
    const data = props.data
    const accessorInfo = props.accessorInfo
    const columns = this.getColumns(data, accessorInfo)
    const rowCount = (_.isEmpty(data))? 0 : data.length

    this.state = {
      data,
      columns,
      accessorInfo,
      rowCount
    };
    this.getColumns = this.getColumns.bind(this);
  }

  componentDidMount() {
  }

  getColumns(data, accessorInfo) {
    const columns = [{
      Header: '',
      accessor: 'column_name',
      columnIndex: 1,
      className: 'navbar navbar-light bg-faded align-self-center py-1',
      sortable: false,
      isSortable: false,
      Cell: (row) => {
        return <div className='mx-auto'>
          <button
            type='button'
            className='btn btn-sm btn-primary'
            onClick={() => {
              this.props.history.push('/element-page-example')
              // this.goToNewPage(row.original.id, row.original)
            }}>View</button>
        </div>
      }
    },]
    
    if (!_.isEmpty(data) && !_.isEmpty(accessorInfo)) {
        Object.keys(accessorInfo).forEach(key => {
            if (key !== "_id" && key !== "selected") {
              columns.push({
                accessor: key,
                Header: accessorInfo[key]
              });
            }
        });
    }
    return columns;
  }

  getColumns2(data, accessorInfo) {
    const columns = []
    let count = 0
    if (!_.isEmpty(data)) {
      const sample = data[0];
      if(!_.isEmpty(sample)){
        Object.keys(sample).forEach(key => {
          if(count++ < 10) {

          if (key !== "_id" && key !== "selected") {
            columns.push({
              accessor: key,
              Header: key
            });
            }
          }
        });
      }
    }
    return columns;
  }

  render() {
    const { data, columns, rowCount} = this.state;

    const tableProps = {
      getTheadProps: (s, r) => {
        // someone asked for an example of a background color change
        // here it is...
        return {
          style: {
            paddingTop: '5px',
            paddingBottom: '5px',
            color: 'white',
            backgroundColor: '#77777A' 
          }
        }
      }
    }

    return (
      <div  style={style.containerTable} >
        <ReactTable
          {...tableProps}
          showPagination={false}
          noDataText="No Data Available"
          data={data}
          columns={columns}
          defaultPageSize={rowCount}
          {...tableProps}
          style={style.containerTable}
          />
      </div>
    );
  }
}

ElementTable.propTypes = {
  data: PropTypes.array.isRequired,
  accessorInfo: PropTypes.object.isRequired
};

export default ElementTable;
