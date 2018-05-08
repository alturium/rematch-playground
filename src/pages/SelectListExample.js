import React from "react";
import SelectList from '../components/SelectList'

const data = { data: 
 [ 
  { checkState: true, item: 'application | tablename1' },
   {checkState: true, item: 'application | tablename2' },
   {checkState: true, item: 'application | tablename3' },
   {checkState: true, item: 'application | tablename4' },
   {checkState: true, item: 'application | tablename5' },
   {checkState: true, item: 'application | tablename6' },
   {checkState: true, item: 'application | tablename7' },
   {checkState: true, item: 'application | tablename8' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   { checkState: true, item: 'application | tablename9' },
   {checkState: true, item: 'application | tablename10' }
  ]
}

const style = {
  panel: {
  }
}

const SelectListExample = () => (
  <div className="container" style={style.panel}>
    <h2>Select List Example</h2>
    <div className="btn-group">
      <a href="/" className="btn btn-default">Home</a>
    </div>
    <SelectList {...data} />
  </div>
);

export default SelectListExample;
