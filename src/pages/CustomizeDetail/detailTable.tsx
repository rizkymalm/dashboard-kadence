import React from "react";
import * as FlexmonsterReact from "react-flexmonster";

import "./styles.scss";
import { Card, Filter, Button } from "../../component";

interface Props {
  type?: string;
  name?: string;
}

const DetailTable = ({ type, name }: Props) => {
  return (
    <div>
      <p className="text-title-header">Table {name}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Filter label="Show By Parent" inputLabel="Parent" />
        <Filter label="Show By Child" inputLabel="Child" />
        <div style={{ marginRight: 10 }}>
          <Button textBtn="Lihat" />
        </div>
        <Button isOutlined textBtn="Hapus" />
      </div>
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

export default DetailTable;
