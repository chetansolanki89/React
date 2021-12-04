import React, { useState } from "react";
import FilterCPrac from "./FilterCPrac";
import { Tab, Tabs, Button, ButtonGroup } from "react-bootstrap";

const FilterPPrac = ({productData}) => {
  const [value, setValue] = useState(true);
  return (
    <div>

      {/* <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      > */}
        {/* <Tab eventKey="dryfruits" title="Dry Fruits">
          <FilterCPrac pval={props} />
        </Tab> */}
          <FilterCPrac pval={productData.data} />
      {/* </Tabs> */}
    </div>
  );
};

export default FilterPPrac;
