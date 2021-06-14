import React from "react";

import "./styles.scss";
import { Chart, Card } from "../../component";
import { documentTitle } from "../../utils";

const Dashboard = () => {
  documentTitle("My Dashboard");
  const exampleDataBySes = [
    ["Jakarta", 146],
    ["Bandung", 16.1],
    ["Surabaya", 14.2],
    ["Medan", 14.0],
    ["Malang", 12.5],
  ];
  const dataKota = [
    {
      label: "Jakarta",
      y: 70,
      percent: "70%",
      colour: { color: "#75A43D", paddingLeft: 50 },
    },
    {
      label: "Bandung",
      y: 42,
      percent: "84%",
      colour: { color: "#95C261", paddingLeft: 50 },
    },
    {
      label: "Surabaya",
      y: 30,
      percent: "60%",
      colour: { color: "#3bcbb2", paddingLeft: 50 },
    },
    {
      label: "Medan",
      y: 38,
      percent: "76%",
      colour: { color: "#F5A149", paddingLeft: 50 },
    },
    {
      label: "Malang",
      y: 38,
      percent: "76%",
      colour: { color: "#FFBE64", paddingLeft: 50 },
    },
  ];
  return (
    <div>
      <div className="container-chart">
        <p className="text-title-header">Overview</p>
        {/* <img src={HeaderImg} alt="" style={{ height: 170, width: "100%" }} /> */}
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {dataKota.map((kota) => {
              return (
                <div
                  className="header-box"
                  style={{ marginLeft: 20, marginRight: 20 }}
                >
                  <p className="semibold-text">{kota.label}</p>
                  <span className="bold-text" style={kota.colour}>
                    {kota.y}({kota.percent})
                  </span>
                </div>
              );
            })}
          </div>
        </Card>

        <p className="text-title-header">Achievement</p>
        <Card>
          <p className="regular-text">Achievement by SES</p>
          <Chart data={[146, 67, 135, 128, 140]} typeChart="column" />
        </Card>
      </div>

      <div className="container-chart direction-row">
        <Card className="half-card">
          <p className="regular-text">Achievement by Age</p>
          <Chart data={[1, 2, 3]} typeChart="column" />
        </Card>
        <Card className="half-card">
          <p className="regular-text">Achievement by City</p>
          <Chart data={exampleDataBySes} typeChart="pie" />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
