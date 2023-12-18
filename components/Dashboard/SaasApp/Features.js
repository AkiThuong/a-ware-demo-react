import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const FeaturesData = [
  {
    id: "1",
    subTitle: "Total Orders",
    number: "1,452",
    icon: "ri-stack-line",
    badgeClass: "successBadge",
    progress: "4.87%",
    progressIcon: "ri-arrow-up-s-line",
    helpText: "Leads this month",
  },
  {
    id: "2",
    subTitle: "Overall Revenue",
    number: "$28,452",
    icon: "ri-pie-chart-line",
    badgeClass: "dangerBadge",
    progress: "0.50%",
    progressIcon: "ri-arrow-down-s-line",
    helpText: "Leads this month",
  },
  {
    id: "3",
    subTitle: "Average Price",
    number: "$200.5",
    icon: "ri-money-cny-box-line",
    badgeClass: "successBadge",
    progress: "2.22%",
    progressIcon: "ri-arrow-up-s-line",
    helpText: "Leads this month",
  },
  {
    id: "4",
    subTitle: "Total Clients",
    number: "7,805",
    icon: "ri-user-follow-line",
    badgeClass: "successBadge",
    progress: "1.21%",
    progressIcon: "ri-arrow-up-s-line",
    helpText: "Leads this month",
  },
];

const Features = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {FeaturesData.map((feature) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={3} key={feature.id}>
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
                  mb: "10px",
                }}
              >
                <Box>
                  <Typography as="p" sx={{ fontSize: 15 }}>
                    {feature.subTitle}
                  </Typography>

                  <Typography as="h1" sx={{ fontSize: 28, fontWeight: 700 }}>
                    {feature.number}
                  </Typography>
                </Box>

                <Box>
                  <i
                    className={feature.icon}
                    style={{
                      lineHeight: "1",
                      fontSize: "40px",
                      color: "#a9a9c8",
                    }}
                  ></i>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  className={feature.badgeClass}
                  style={{
                    fontWeight: "500",
                    position: "relative",
                    paddingRight: "30px",
                  }}
                >
                  {feature.progress}{" "}
                  <i
                    className={`progressIcon ${feature.progressIcon}`} 
                  ></i>
                </span>
                <Typography as="p" className="ml-10px">
                  {feature.helpText}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Features;
