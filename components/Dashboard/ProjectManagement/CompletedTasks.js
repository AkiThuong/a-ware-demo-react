import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CompletedTasks = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart
  const series = [
    {
      name: "Task",
      data: [21, 22, 10, 28, 16, 21, 13, 30],
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
        borderRadius: 5,
        borderRadiusApplication: 'end',
        horizontal: false,
        columnWidth: "20%"
      },
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
      labels: {
        colors: '#5B5B98'
      }
    },
    xaxis: {
      categories: [
        ["1 Jan"],
        ["2 Jan"],
        ["3 Jan"],
        ["4 Jan"],
        ["5 Jan"],
        ["6 Jan"],
        ["7 Jan"],
        ["8 Jan"],
      ],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        style: {
          colors: "#a9a9c8",
          fontSize: "14px"
        }
      }
    },
    yaxis: {
      show: false,
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
    grid: {
      show: false,
      strokeDashArray: 5,
      borderColor: "#EDEFF5"
    },
    fill: {
      opacity: 1,
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
            justifyContent: "space-between",
            alignItems: "center",
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
            Completed Tasks
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem sx={{ fontSize: "14px" }}>Last 15 Days</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>Last Month</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>Last Year</MenuItem>
          </Menu>
        </Box>

        <Chart options={options} series={series} type="bar" height={265} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            textAlign: "center",
            mt: "22px",
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
              20k
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
              5.50k
            </Typography>
          </Box>

          <Box>
            <Typography color="#A9A9C8" mb={1} fontSize="14px">  
              Last Month
            </Typography>
            <Typography fontWeight="500" fontSize="18px" as="h4">
              <ArrowUpwardIcon
                color="success"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              50k
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CompletedTasks;
