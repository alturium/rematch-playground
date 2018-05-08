import React from "react";
import { ButtonGroup } from "@atlaskit/button";
import SearchForm from "../components/SearchForm";
import CollapsibleCard from "../components/CollapsibleCard";
import SelectListTable from "./SelectListTable";

import applicationNames from "../data/database-select-data";
import applicationTablenames from "../data/application-tablenames";

let style = {
  mainContainer: {
    width: "300px"
  },
  selectContainer: {
    width: "100%",
    height: "100%"
  },
  buttonBar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 20px 0px 0px"
  },
  actionContainer: {
    margin: "10px 5px 10px 5px"
  }
};

let onSelectChange = () => {};

const FilterPane = () => (
  <div classNameName="container" style={style.mainContainer}>
    <div className="row">
      <div className="col">
        <div className="container-fluid">
          <SearchForm />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <CollapsibleCard cardTitle={"Databases"}>
          <div style={style.selectContainer}>
            <SelectListTable
              data={applicationNames}
              onSelectChange={onSelectChange}
            />
          </div>
        </CollapsibleCard>
        <CollapsibleCard cardTitle={"Table Names"}>
          <div style={style.selectContainer}>
            <SelectListTable
              data={applicationTablenames}
              onSelectChange={onSelectChange}
            />
          </div>
        </CollapsibleCard>
        <div className="container" style={style.actionContainer}>
          <div className="row">
            <div className="col col-sm-8">
              <ButtonGroup>
                <div className="btn btn-sm btn-primary">Reset</div>
              </ButtonGroup>
            </div>
            <div className="col col-sm-4" style={style.buttonBar}>
              <ButtonGroup>
                <div className="btn btn-sm btn-primary">Apply</div>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FilterPane;
