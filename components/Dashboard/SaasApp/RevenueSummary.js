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

const RevenueSummary = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart
  const series = [
    {
      name: "Revenue Summary",
      data: [2.3, 3, 4.0, 10.5, 5.6, 5, 4, 2.8, 2, 1.3, 0.8, 0.3],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        columnWidth: "60%",
        borderRadiusWhenStacked: "last",
        borderRadiusApplication: "around",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -28,
      style: {
        colors: ["#5B5B98"],
      },
    },
    colors: ["#757fef"],
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "top",
      labels: {
        style: {
          colors: "#A9A9C8",
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
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EDEFF5",
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
            Revenue Summary
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

        <Chart options={options} series={series} type="bar" height={360} />
      </Card>
    </>
  );
};

export default RevenueSummary;
