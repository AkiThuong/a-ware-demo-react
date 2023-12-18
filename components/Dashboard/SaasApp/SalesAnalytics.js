import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SalesAnalytics = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart
  const series = [
    {
      data: [
        {
          x: "Operations",
          y: [2800, 4500],
        },
        {
          x: "Customer Success",
          y: [3200, 4100],
        },
        {
          x: "Engineering",
          y: [2950, 7800],
        },
        {
          x: "Marketing",
          y: [3000, 4600],
        },
        {
          x: "Product",
          y: [3500, 4100],
        },
        {
          x: "Data Science",
          y: [4500, 6500],
        },
        {
          x: "Sales",
          y: [4100, 5600],
        },
      ],
    },
  ];
  const options = {
    chart: { 
      type: "rangeBar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#2DB6F5", "#757FEF"],
    plotOptions: {
      bar: {
        horizontal: true,
        isDumbbell: true,
        dumbbellColors: [["#2DB6F5", "#757FEF"]],
      },
    },
    legend: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#757FEF"],
        inverseColors: false,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EDEFF5",
    },
    xaxis: {
      labels: {
        style: {
          colors: "#a9a9c8",
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a9a9c8",
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: false,
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        {/* Card Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            }}
          >
            Sales Analytics
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: "14px" }}>
                Select
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: "14px" }}
                className="select"
              >
                <MenuItem value={1} sx={{ fontSize: "13px" }}>
                  This Week
                </MenuItem>
                <MenuItem value={2} sx={{ fontSize: "13px" }}>
                  This Month
                </MenuItem>
                <MenuItem value={3} sx={{ fontSize: "13px" }}>
                  This Year
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "13px" }}>
                  All Time
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Chart options={options} series={series} type="rangeBar" height={360} />
      </Card>
    </>
  );
};

export default SalesAnalytics;
