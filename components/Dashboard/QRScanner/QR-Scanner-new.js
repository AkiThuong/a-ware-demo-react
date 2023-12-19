import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Html5Qrcode } from "html5-qrcode";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
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
const QRScannerCustom = () => {
  const [qrCodeScanner, setQrCodeScanner] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isCameraChanged, setIsCameraChanged] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [facingMode, setFacingMode] = useState("environment");
  const [showScanConfirmation, setShowScanConfirmation] = useState(false);
  const pauseTimeoutRef = useRef(null);
  const [scanResults, setScanResults] = useState([]);

  useEffect(() => {
    // Load stored results from localStorage
    const storedResults = localStorage.getItem("scanResults");
    if (storedResults) {
      setScanResults(JSON.parse(storedResults));
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  const theme = useTheme();

  const handleToggleScanning = (event) => {
    setIsScanning(event.target.checked);
    toggleScanning();
  };

  const handleToggleCameraChange = (event) => {
    setIsCameraChanged(event.target.checked);
    changeCamera();
  };

  const handleToggleDarkMode = (event) => {
    setIsDarkMode(event.target.checked);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    console.log("isDarkMode store", isDarkMode);
    // Update the class on the <html> element to apply the selected mode
    const htmlElement = document.querySelector("html");
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const qrCodeScanner = new Html5Qrcode("reader");
    setQrCodeScanner(qrCodeScanner);

    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const qrboxFunction = (viewfinderWidth, viewfinderHeight) => {
    let minEdgePercentage = 0.7; // 70%
    let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
    let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
    return {
      width: qrboxSize,
      height: qrboxSize,
    };
  };

  const toggleScanning = () => {
    if (isScanning) {
      qrCodeScanner.stop();
      setIsScanning(false);
    } else {
      qrCodeScanner
        .start({ facingMode }, { fps: 10, qrbox: qrboxFunction }, onScanSuccess)
        .catch((err) => {
          console.error(err);
        });
      setIsScanning(true);
    }
  };
  const onScanSuccess = async (decodedText) => {
    setShowScanConfirmation(true);
    playAudio();

    const newResult = {
      result: decodedText,
      timestamp: new Date().toISOString(),
    };

    setScanResults((prevResults) => {
      const updatedResults = [...prevResults, newResult].slice(-5); // Keep last 5 results
      console.log("New Results: ", newResult);
      console.log("Updated Scan Results: ", updatedResults);
      localStorage.setItem("scanResults", JSON.stringify(updatedResults));
      const checkResults = localStorage.getItem("scanResults");
      console.log("Check Store Results: ", checkResults);

      return updatedResults;
    });
    // Pause the scanner
    let shouldPauseVideo = true;
    let showPausedBanner = true;
    qrCodeScanner.pause(shouldPauseVideo, showPausedBanner);

    // Resume scanning after 2 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setShowScanConfirmation(false);
      qrCodeScanner.resume();
    }, 2000);
  };
  const changeCamera = () => {
    const newFacingMode = facingMode === "environment" ? "user" : "environment";

    if (isScanning) {
      // Stop the current scanning session
      qrCodeScanner
        .stop()
        .then(() => {
          // Update the facing mode
          setFacingMode(newFacingMode);
          // Restart scanning with the new facing mode
          qrCodeScanner
            .start(
              { facingMode: newFacingMode },
              { fps: 10, qrbox: 250 },
              (decodedText) => {
                console.log(decodedText);
                // Handle the scanned code as needed
              }
            )
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error("Error stopping the QR scanner:", err);
        });
    } else {
      // If not currently scanning, just update the facing mode
      setFacingMode(newFacingMode);
    }
  };

  const playAudio = async () => {
    const welcomeSound = new Audio("/sound/ping.mp3");
    try {
      await welcomeSound.play();
    } catch (e) {
      console.error("Audio play failed:", e);
    }
  };

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: "1px solid #EEF0F7",
        paddingBottom: "10px",
        marginBottom: "15px",
      }}
    >
      <FormGroup
        row
        sx={{ width: "100%", justifyContent: "center", marginBottom: "15px" }}
      >
        <FormControlLabel
          control={
            <Switch checked={isScanning} onChange={handleToggleScanning} />
          }
          label={isScanning ? "Turn off" : "Turn on"}
        />
        <FormControlLabel
          control={
            <Switch
              checked={isCameraChanged}
              onChange={handleToggleCameraChange}
            />
          }
          label={isCameraChanged ? "Rear Camera" : "Front Camera"}
        />
        <FormControlLabel
          control={
            <Switch checked={isDarkMode} onChange={handleToggleDarkMode} />
          }
          label={isDarkMode ? "Light Mode" : "Dark Mode"}
        />
      </FormGroup>
      <div style={{ position: "relative", maxWidth: "600px", height: "auto" }}>
        {showScanConfirmation && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 20,
            }}
          >
            <Image
              src="./images/icons/check.gif"
              alt="Camera Disabled"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
        <div id="reader" style={{ width: "100%", height: "100%" }}></div>
        {isScanning ? (
          <></>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "300px",
            }}
          >
            <Image
              src="./images/logo/gamemateai-logo.png" // Path to your placeholder image
              alt="Camera Disabled"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
          backgroundColor: theme.palette.background.paper,
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

        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
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
              {scanResults.length > 0 ? (
                scanResults.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ textAlign: "center" }}>
                      {result.result}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {result.timestamp}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2} sx={{ textAlign: "center" }}>
                    No scan data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default QRScannerCustom;

