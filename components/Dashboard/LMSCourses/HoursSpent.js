import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const HoursSpent = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart
  const series = [
    {
      name: "Spent",
      data: [21, 22, 10, 28, 16, 20, 25],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: ["#757FEF"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Sat"],
        ["Sun"],
        ["Mon"],
        ["Tue"],
        ["Wed"],
        ["Thu"],
        ["Fri"],
      ],
      labels: {
        style: {
          colors: "#A9A9C8",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A9A9C8",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        colors: "#f6f6f7",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "" + val + " Hours";
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#EDEFF5",
      strokeDashArray: 5,
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            marginBottom: "10px",
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
            Hours Spent
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: '14px' }}>Select</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: '14px' }}
                className="select"
              >
                <MenuItem value={0} sx={{ fontSize: '14px' }}>Today</MenuItem>
                <MenuItem value={1} sx={{ fontSize: '14px' }}>This Week</MenuItem>
                <MenuItem value={2} sx={{ fontSize: '14px' }}>Last Month</MenuItem>
                <MenuItem value={3} sx={{ fontSize: '14px' }}>Last 12 Months</MenuItem>
                <MenuItem value={4} sx={{ fontSize: '14px' }}>All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Chart options={options} series={series} type="bar" height={250} />
      </Card>
    </>
  );
};

export default HoursSpent;
