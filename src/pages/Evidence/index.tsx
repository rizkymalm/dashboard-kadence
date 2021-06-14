import React from "react";

import "./styles.scss";
import { Card, Table, Filter, Button } from "../../component";

const Evidence = () => {
  return (
    <div className="container-evidence">
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
        <Table />
      </Card>
    </div>
  );
};

export default Evidence;
