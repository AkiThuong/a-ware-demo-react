import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TimeToResolveComplaint = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px",
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
          <Typography as="h5" fontSize="16px" fontWeight="500">
            Time to Resolve Complaint
          </Typography>

          <Typography as="h3" fontSize="28px" fontWeight="700" color="#5B5B98">
            03<span style={{ fontSize: "12px" }}>m</span> : 00
            <span style={{ fontSize: "12px" }}>s</span>
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <img src="/images/chart4.png" alt="chart" />
        </Box>
      </Card>
    </>
  );
};

export default TimeToResolveComplaint;
