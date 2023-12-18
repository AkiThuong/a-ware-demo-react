import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TotalTransactions = () => {
  // Chart
  const series = [
    {
      name: "This Week",
      data: [30, 20, 40, 25, 18, 43, 15]
    },
    {
      name: "Last Week",
      data: [20, 10, 20, 20, 12, 27, 28]
    },
    {
      name: "Performance",
      data: [10, 10, 15, 15, 15, 14, 15]
    },
    {
      name: "Cost",
      data: [20, 10, 20, 20, 12, 27, 28]
    },
  ];

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "22%"
      }
    },
    xaxis: {
      type: "category",
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: "#a9a9c8",
          fontSize: "14px"
        }
      }
    },
    colors: [
      "#EDF0F4", "#1CCAB8", "#BDEEE1", "#D0F1FA"
    ],
    legend: {
      offsetY: 8,
      fontSize: "14px",
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: '#5B5B98'
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a9a9c8",
          fontSize: "14px"
        },
      },
      axisBorder: {
        show: false
      }
    },
    fill: {
      opacity: 1
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EDEFF5"
    }
  }

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 0 15px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              p: "0 20px 0",
            }}
          >
            Total Transactions
          </Typography>
        </Box>
        
        <Chart options={options} series={series} type="bar" height={325} />
      </Card>
    </>
  );
};

export default TotalTransactions;
