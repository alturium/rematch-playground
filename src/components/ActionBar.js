import React from "react";
import Button, { ButtonGroup } from "@atlaskit/button";
import DropdownMenu, { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';
import SearchForm from '../components/SearchForm'

const DropdownExample = () => (
  <div style={{ margin: '20px' }}>
    <DropdownMenu
      trigger="Choices"
      triggerType="button"
      shouldFlip={false}
      position="bottom left"
      onOpenChange={e => console.log('dropdown opened', e)}
    >
      <DropdownItemGroup>
        <DropdownItem>Sydney</DropdownItem>
        <DropdownItem>Melbourne</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  </div>
)


const style = {
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonStyle: {
    position: "relative",
    float: "right"
  }
};

const ActionBar = () => (
  <div className='row'>
    <div className="col col-sm-4">
      <ButtonGroup appearance="default" >
        <Button shouldFitContainer={true} appearance='default' >Top</Button>
        <Button shouldFitContainer appearance='default' >Back</Button>
      </ButtonGroup>
    </div>
    <div className="col col-sm-8" style={style.buttonBar}>
      <SearchForm />
      <ButtonGroup>
        <DropdownMenu
          trigger="Choices"
          triggerType="button"
          shouldFlip={false}
          position="bottom left"
          onOpenChange={e => console.log('dropdown opened', e)}
        >
          <DropdownItemGroup>
            <DropdownItem>Sydney</DropdownItem>
            <DropdownItem>Melbourne</DropdownItem>
          </DropdownItemGroup>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  </div >
)

export default ActionBar;
