import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ProgressBar from "@ramonak/react-progress-bar";

const IncomeStatus = () => {
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
            mb: "30px",
          }}
        >
          <Box>
            <i
              className="ri-money-dollar-circle-line"
              style={{
                backgroundColor: "#757fef",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                borderRadius: "5px",
                fontSize: "25px",
                height: "50px",
                width: "50px",
                lineHeight: "50px",
                display: "inline-block",
              }}
            ></i>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography as="h1" sx={{ fontSize: 28, fontWeight: 700 }}>
              $31,570
            </Typography>
            <Typography as="p">Income Status</Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "8px",
            }}
          >
            <Typography as="p" sx={{ fontSize: 14, fontWeight: 500 }}>
              Income Target
            </Typography>
            <Typography as="p">$180548.00</Typography>
          </Box>

          <ProgressBar
            completed={50}
            height="5px"
            labelSize="0px"
            baseBgColor="#E9EFFC"
            bgColor="#757FEF"
          />
        </Box>
      </Card>
    </>
  );
};

export default IncomeStatus;
