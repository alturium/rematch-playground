
import React from "react";
import _ from 'lodash'
import PropTypes from 'prop-types'
import './ElementList.css'

let style = {
  column1: {
    color: 'white',
    background: '#77777A', 
    padding: '4px 5px 5px 5px',
    height: '2.0em'
  },
  otherColumns: {
    padding: '4px 5px 4px 5px', 
    background: '#EDEBEA' 
  }
}

const ElementRow = (props) => (
  <div class='row' style={{ background: '#EDEBEA', margin: '1px 1px 1px 1px'}}>
    <div class="col-sm-3" id='element-title' style={style.column1} >
      {props.keyName}
    </div>
    <div class="col-sm-9" style={style.otherColumns}>
      {props.value}
    </div>
  </div>
)

const MissingDataElementRow = () => (
  <ElementRow keyName='Missing Data' value='' />
)

/* 
 *  ElementList - Display a list of "property":"value" in a table-like format.
 * 
 *    accessor: object, { propertyName: captionName }
 *    data: object, has { propertyName: value}
 */

class ElementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      accessor: props.accessor
    };
    this.getKeyValues = this.getKeyValues.bind(this)
  }

  // Create an array of { caption, value}
  getKeyValues(data, accessor) {
    let keysValues = []
    // accessor maps captions to key's values
    if( !_.isEmpty( _.keys(accessor))){
      _.keys(accessor).forEach(
          (propName, idx, array) => {
            let title = accessor[propName]  // get formal title
            if(_.isString(title) ) {
              keysValues.push({ caption: title, value: data[propName]})
            }
          }
        )
    }
    return keysValues;
  }

  render() {
    const { data, accessor } = this.state;
    let propertyList = this.getKeyValues(data, accessor)

    return (
      <div class="container">
      {
        (_.isEmpty(propertyList))
          ? ( <MissingDataElementRow />)
          : propertyList.map(i => <ElementRow keyName={i.caption} value={i.value} />)
      }
      </div>
    );
  }
}

ElementList.propTypes = {
  data: PropTypes.object.isRequired,
  accessor: PropTypes.object.isRequired
}

export default ElementList;
