import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import styles from "../../Crypto/MyProfile/MyProfile.module.css";

class MyProfileChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [1000, 800, 1500, 761, 871],
      options: {
        colors: ["#757fef", "#2db6f5", "#00b69b", "#f7931a", "#f4f4f4"],
        chart: {
          type: "donut",
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$" + val;
            },
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "88%",
            },
          },
        },
        stroke: {
          width: 0,
          show: true,
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          offsetY: 0,
          show: false,
          fontSize: "14px",
          position: "bottom",
          horizontalAlign: "center",
        },
        labels: ["Bitcoin", "Ethereum", "Comp Bidr", "Matic", "Litecoin"],
      },
    };
  }

  render() {
    return (
      <>
        <div className={styles.myProfileChart}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={260}
          />
          <div className={styles.content}>
            <h5>$1025465</h5>
            <p>Total Value</p>
          </div>
        </div>
      </>
    );
  }
}

export default MyProfileChart;
