import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const CurrentRate = () => {
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
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        {/* Header */}
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
            Current Rate
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
                <MenuItem value={0} sx={{ fontSize: "14px" }}>
                  Latest Coin
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "14px" }}>
                  Old Coin
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "14px" }}>
                  All Coin
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Card */}
        <Grid
          container
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                background: "rgba(117, 127, 239, .1)",
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px 20px",
                mb: "15px",
              }}
              className="bg-black"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "30px",
                }}
              >
                <Box>
                  <img src="/images/matic.png" alt="matic" />
                </Box>

                <Box
                  style={{
                    color: "#00B69B",
                    fontSize: "15px",
                    display: "flex",
                  }}
                >
                  <TrendingUpIcon style={{ marginRight: "5px" }} /> +1.3%
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box fontSize={15} fontWeight="500">
                  0.451269
                </Box>

                <Box fontSize={15} fontWeight="500">
                  $12,06547.00
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                background: "rgba(247, 147, 26, .1)",
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px 20px",
                mb: "15px",
              }}
              className="bg-black"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "30px",
                }}
              >
                <Box>
                  <img src="/images/btc.png" alt="btc" />
                </Box>

                <Box
                  style={{
                    color: "#00B69B",
                    fontSize: "15px",
                    display: "flex",
                  }}
                >
                  <TrendingUpIcon style={{ marginRight: "5px" }} /> +2.48%
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box fontSize={15} fontWeight="500">
                  1.111211
                </Box>

                <Box fontSize={15} fontWeight="500">
                  $14,32522.00
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                background: "rgba(117, 127, 239, .1)",
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px 20px",
                mb: "15px",
              }}
              className="bg-black"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "30px",
                }}
              >
                <Box>
                  <img src="/images/comp.png" alt="comp" />
                </Box>

                <Box
                  style={{
                    color: "#EE368C",
                    fontSize: "15px",
                    display: "flex",
                  }}
                >
                  <TrendingDownIcon style={{ marginRight: "5px" }} /> -0.5%
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box fontSize={15} fontWeight="500">
                  0.451269
                </Box>

                <Box fontSize={15} fontWeight="500">
                  $12,06547.00
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CurrentRate;
