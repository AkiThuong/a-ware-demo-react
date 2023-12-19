import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

const QRResultList = () => {
  const [scanResult, setScanResult] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchScanData = () => {
      const savedData = JSON.parse(localStorage.getItem("scanData"));
      if (savedData && typeof savedData === "object") {
        setScanResult(savedData);
      }
    };

    fetchScanData();

    window.addEventListener("scanCompleted", fetchScanData);

    return () => {
      window.removeEventListener("scanCompleted", fetchScanData);
    };
  }, []);

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        p: "25px 20px 15px",
        mb: "15px",
        backgroundColor: theme.palette.background.paper, // Theme-based background color
      }}
    >
      <Box sx={{ paddingBottom: "10px" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: theme.palette.text.primary,
          }}
        >
          Scan Result
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <Table aria-label="custom table" className="dark-table">
          <TableHead sx={{ background: "#F7FAFF" }}>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "1px solid #F7FAFF",
                  fontSize: "13.5px",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Task
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #F7FAFF",
                  fontSize: "13.5px",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scanResult ? (
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {scanResult.result}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {scanResult.timestamp}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  No scan data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
export default QRResultList;

