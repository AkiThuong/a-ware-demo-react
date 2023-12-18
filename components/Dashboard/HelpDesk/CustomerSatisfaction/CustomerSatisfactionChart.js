import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class CustomerSatisfactionChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [80, 75, 70, 60],
      options: {
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                offsetY: -2,
                show: true,
              },
              value: {
                show: true,
                offsetY: 3,
                fontWeight: "600",
              },
              total: {
                show: true,
                label: "Overall",
              },
            },
            hollow: {
              size: "45%",
            },
          },
        },
        colors: ["#757FEF", "#2DB6F5", "#8BD3F4", "#BFE9FF"],
        labels: ["Excellent", "Very Good", "Good", "Unhappy"],
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          height="290"
          type="radialBar"
        />
      </>
    );
  }
}

export default CustomerSatisfactionChart;
