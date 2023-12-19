import React from "react";
import Grid from "@mui/material/Grid";
import QRScanUI from "@/components/Dashboard/QRScanner";
import QRResultList from "@/components/Dashboard/QRScanner/QR-Result";

export default function ProjectManagement() {
  return (
    <Grid container justifyContent="center" style={{ minHeight: "100vh" }}>
      <Grid>
        {" "}
        {/* Added horizontal padding */}
        <QRScanUI />
      </Grid>
    </Grid>
  );
}

