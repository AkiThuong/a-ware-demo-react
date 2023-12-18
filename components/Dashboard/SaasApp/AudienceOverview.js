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

const AudienceOverview = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart
  const series = [
    {
      name: "New Visitors",
      data: [0, 70, 35, 80, 40, 80, 75, 65, 80, 70, 40, 0],
    },
    {
      name: "Unique Visitors",
      data: [0, 55, 80, 30, 50, 60, 32, 40, 60, 60, 40, 10],
    },
    {
      name: "Previous Visitors",
      data: [0, 45, 35, 50, 80, 40, 60, 50, 110, 40, 65, 20],
    },
  ];
  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#E7EBF5", "#8EB0DE", "#90C6E0"],
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
        "13 Jan",
        "14 Jan",
        "15 Jan",
        "16 Jan",
        "17 Jan",
        "18 Jan",
        "19 Jan",
        "20 Jan",
        "21 Jan",
        "22 Jan",
        "23 Jan",
        "24 Jan",
        "25 Jan",
      ],
      labels: {
        style: {
          colors: "#a9a9c8",
          fontSize: "14px",
        },
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 6,
      labels: {
        style: {
          colors: "#a9a9c8",
          fontSize: "14px",
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EDEFF5",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      offsetY: 0,
      position: "top",
      fontSize: "14px",
      horizontalAlign: "center",
      labels: {
        colors: "#5B5B98",
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
            mb: "20px",
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
            Audience Overview
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

        <Chart options={options} series={series} type="area" height={420} />
      </Card>
    </>
  );
};

export default AudienceOverview;
