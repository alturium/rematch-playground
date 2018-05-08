import React from "react";
import ElementList from '../components/ElementList'
import ElementTable from "../components/ElementTable"

const style = {
  panelTitle: {
    padding: '10px 0px 10px 0px'
  },
  elementTable: {
    width: '100%',
    height: '400px'
  }
}

/*
 * Requirement:
 *    data elements have { _id, selected, item } format.
 */

class ObjectSummaryPanel extends React.Component { 

  constructor(props) {
    super()
    const summary = {...props.data.summary}
    const summaryDecorator = props.data.summaryDecorator
    const elements = props.data.elements
    const elementDecorator = props.data.elementDecorator

    this.state = {
      summary,
      summaryDecorator,
      elements,
      elementDecorator
    };
  }

  componentDidMount() {
  }


    render() {
      const { summary, summaryDecorator, elements, elementDecorator } = this.state

      console.log(elements)
        return (
        <div className='container' style={style.container} >
          <div className="container-fluid">
            <h5 style={style.panelTitle} >Summary</h5>
          </div>
            <ElementList data={summary} accessor={summaryDecorator} />
          <div className="container-fluid">
            <h5 style={style.panelTitle} >Element Properties</h5>
          </div>
          <div className="container" style={style.elementTable}>
              <ElementTable data={elements} accessorInfo={elementDecorator} />
          </div>
        </div>
      )
    }
}

export default ObjectSummaryPanel;
