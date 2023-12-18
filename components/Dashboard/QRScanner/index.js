import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import QRScanner from "./QR-Scanner";

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
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: "14px" }}>
                Camera
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={cameraMode}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: "14px" }}
                className="select"
              >
                <MenuItem value={0} sx={{ fontSize: "14px" }}>
                  Front Camera
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "14px" }}>
                  Back Camera
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <QRScanner cameraMode={cameraMode} />
      </Card>
    </>
  );
};

export default QRScanUI;

