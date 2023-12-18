import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

class TotalUsersChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [44, 55, 13],
      options: {
        labels: ["Target", "Last week", "Last Month"],
        stroke: {
          width: 0,
          show: true
        },
        colors: ["#757FEF", "#90C6E0", "#E040FB"],
        legend: {
          offsetY: 0,
          show: false,
          position: "bottom",
          fontSize: "14px",
          labels: {
            colors: '#5B5B98',
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val + "k";
            },
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              height: 280
            }
          }
        }]
      },
    };
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height={290}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            textAlign: "center",
            mt: "30px",
          }}
        >
          <Box>
            <Typography color="#A9A9C8" mb={1} fontSize="14px">
              Target
            </Typography>
            <Typography fontWeight="500" fontSize="18px" as="h4">
              <ArrowDownwardIcon
                color="danger"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              18k
            </Typography>
          </Box>

          <Box>
            <Typography color="#A9A9C8" mb={1} fontSize="14px">
              Last Week
            </Typography>
            <Typography fontWeight="500" fontSize="18px" as="h4">
              <ArrowUpwardIcon
                color="success"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              5.21k
            </Typography>
          </Box>

          <Box>
            <Typography color="#A9A9C8" mb={1} fontSize="14px">
              Last Month
            </Typography>
            <Typography fontWeight="500" fontSize="18px" as="h4">
              <ArrowDownwardIcon
                color="danger"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              32k
            </Typography>
          </Box>
        </Box>
      </>
    );
  }
}

export default TotalUsersChart;
