import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ProgressBar from "@ramonak/react-progress-bar";

const TicketsStatus = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart
  const series = [
    {
      name: "Open",
      data: [10, 20, 15, 12, 9, 11, 6],
    },
    {
      name: "Closed",
      data: [-10, -10, -15, -12, -9, -11, -6],
    },
  ];
  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#2DB6F5", "#757FEF"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "15%",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      show: true,
      strokeDashArray: 5,
      borderColor: "#EDEFF5",
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a9a9c8",
          fontSize: "14px",
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      labels: {
        style: {
          colors: "#a9a9c8",
          fontSize: "14px",
        },
      },
    },
    legend: {
      show: false,
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
            Tickets Status
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
                <MenuItem value={1} sx={{ fontSize: "14px" }}>
                  This Week
                </MenuItem>
                <MenuItem value={2} sx={{ fontSize: "14px" }}>
                  This Month
                </MenuItem>
                <MenuItem value={3} sx={{ fontSize: "14px" }}>
                  This Year
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "14px" }}>
                  All Time
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Chart */}
        <Grid
          container
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item xs={12} md={8} lg={8} xl={8}>
            <Chart options={options} series={series} type="bar" height={282} />
          </Grid>

          <Grid item xs={12} md={4} lg={4} xl={4}>
            {/* New Tickets  */}
            <Box
              sx={{
                borderRadius: "5px",
                background: "rgba(117, 127, 239, 0.10)",
                p: "22px 20px",
                mb: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: "15px",
                }}
              >
                <Box>
                  <Typography as="p" mb="3px">
                    New Tickets
                  </Typography>

                  <Typography
                    as="h3"
                    sx={{
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    12,50846
                  </Typography>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <TrendingUpIcon className="successColor" sx={{ mr: "5px" }} />{" "}
                  +2.48%
                </Box>
              </Box>

              <ProgressBar
                completed={30}
                height="8px"
                labelSize="7px"
                baseBgColor="#fff"
                bgColor="#757FEF"
              />
            </Box>

            {/* Solved Tickets */}
            <Box
              sx={{
                borderRadius: "5px",
                background: "rgba(45, 182, 245, 0.10)",
                p: "22px 20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: "15px",
                }}
              >
                <Box>
                  <Typography as="p" mb="3px">
                    Solved Tickets
                  </Typography>

                  <Typography
                    as="h3"
                    sx={{
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    10,431
                  </Typography>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <TrendingDownIcon
                    className="dangerColor"
                    sx={{ mr: "5px" }}
                  />{" "}
                  -1.02%
                </Box>
              </Box>

              <ProgressBar
                completed={40}
                height="8px"
                labelSize="7px"
                baseBgColor="#fff"
                bgColor="#2DB6F5"
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default TicketsStatus;
