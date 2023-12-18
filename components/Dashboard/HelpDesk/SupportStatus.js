import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "@mui/material/Link";

const SupportStatus = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
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
            Support Status
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

        <Box>
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              color: "#5B5B98",
              mb: "10px",
            }}
          >
            <span className="primaryColor" style={{ fontWeight: "500" }}>
              12,50846
            </span>{" "}
            Tickets
          </Typography>

          <Box
            sx={{
              borderRadius: "3px",
              background: "#EEF0F6",
              display: "flex",
              mb: "20px",
            }} 
          >
            <Box
              sx={{
                width: "88px",
                height: "10px",
                borderRadius: "3px",
                background: "#757FEF",
                mr: "2px",
              }}
            ></Box>
            <Box
              sx={{
                width: "55px",
                height: "10px",
                borderRadius: "3px",
                background: "#EE368C",
                mr: "2px",
              }}
            ></Box>
            <Box
              sx={{
                width: "98px",
                height: "10px",
                borderRadius: "3px",
                background: "#2DB6F5",
              }}
            ></Box>
          </Box>

          <Box
            sx={{
              background: "#F7FAFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: "15px 25px",
            }}
            className="bg-black"
          >
            <Typography
              as="h4"
              fontSize="15px"
              color="#757FEF"
              fontWeight="500"
            >
              Status
            </Typography>
            <Typography fontSize="15px" fontWeight="500">
              % Change
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: "15px 10px",
              borderBottom: "1px solid #F7FAFF",
            }}
            className="for-dark-bottom-border"
          >
            <Box fontSize={15}>
              <span
                style={{
                  background: "#757FEF",
                  width: "7px",
                  height: "7px",
                  borderRadius: "30px",
                  display: "inline-block",
                  marginRight: "5px",
                  position: "relative",
                  top: "-2px",
                }}
              ></span>{" "}
              Resolved Tickets
            </Box>

            <span className="primaryBadge">+2.48%</span>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: "15px 10px",
              borderBottom: "1px solid #F7FAFF",
            }}
            className="for-dark-bottom-border"
          >
            <Box fontSize={15}>
              <span
                style={{
                  background: "#2DB6F5",
                  width: "7px",
                  height: "7px",
                  borderRadius: "30px",
                  display: "inline-block",
                  marginRight: "5px",
                  position: "relative",
                  top: "-2px",
                }}
              ></span>{" "}
              Open Tickets
            </Box>
            <span className="primaryBadge">+1.21%</span>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: "15px 10px",
              borderBottom: "1px solid #F7FAFF",
            }}
            className="for-dark-bottom-border"
          >
            <Box fontSize={15}>
              <span
                style={{
                  background: "#EE368C",
                  width: "7px",
                  height: "7px",
                  borderRadius: "30px",
                  display: "inline-block",
                  marginRight: "5px",
                  position: "relative",
                  top: "-2px",
                }}
              ></span>{" "}
              Unresolved Tickets
            </Box>
            <span className="dangerBadge">-0.50%</span>
          </Box>

          <Link
            href="#"
            underline="none"
            sx={{
              borderRadius: "10px",
              background: "rgba(117, 127, 239, 0.10)",
              color: "#757FEF",
              fontSize: "15px",
              fontWeight: "500",
              display: "block",
              textAlign: "center",
              p: "13px 10px",
              mt: "25px",
            }}
          >
            Create New Ticket
          </Link>
        </Box>
      </Card>
    </>
  );
};

export default SupportStatus;
