import React from "react";
import * as FlexmonsterReact from "react-flexmonster";

import "./styles.scss";
import { documentTitle } from "../../utils";
import { Card } from "../../component";

const Tabulasi = () => {
  documentTitle("tabulasi");
  return (
    <div style={{ marginTop: 30 }}>
      <p className="text-title-header">Tabulasi Pivot</p>

      <Card>
        <FlexmonsterReact.Pivot
          toolbar={true}
          componentFolder="https://cdn.flexmonster.com/"
          width="100%"
          report="https://cdn.flexmonster.com/reports/report.json"
        />
      </Card>
    </div>
  );
};

export default Tabulasi;
