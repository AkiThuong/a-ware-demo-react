import React from "react";
import Grid from "@mui/material/Grid"; 
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImpressionShare from "./ImpressionShare";

const Profile = () => {
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
        <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={6} sm={8}>
            <img
              src="/images/member10.png"
              alt="Profile image"
              style={{ width: "60px", height: "60px", marginBottom: "20px" }}
            />

            <Typography variant="h3" fontSize={16} fontWeight="500" mb="5px">
              Andrew Burns
            </Typography>

            <Typography variant="p">Programmer</Typography>
          </Grid>

          <Grid item xs={6} sm={4}>
            <ImpressionShare />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Profile;
