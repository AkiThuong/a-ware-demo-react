import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import QRScannerNew from "./QR-Scanner-new";

const QRScanUI = () => {
  const [cameraMode, setCameraMode] = React.useState(1); // Default to rear camera (1)

  const handleChange = (event) => {
    setCameraMode(event.target.value);
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
            marginBottom: "15px",
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
            QR Code Scanner
          </Typography>
        </Box>

        <QRScannerNew cameraMode={cameraMode} />
      </Card>
    </>
  );
};

export default QRScanUI;

