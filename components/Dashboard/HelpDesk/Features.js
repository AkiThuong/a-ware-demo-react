import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const FeaturesData = [
  {
    id: "1",
    bgColor: "#EEF0FA",
    number: "199",
    subTitle: "New Tickets",
    icon: "/images/coupon-icon.png",
    helpText: "From Average Yesterday",
  },
  {
    id: "2",
    bgColor: "#F8EEE2",
    number: "207",
    subTitle: "Open Tickets",
    icon: "/images/shape-2-icon.png",
    helpText: "From Average Yesterday",
  },
  {
    id: "3",
    bgColor: "#DDF0F1",
    number: "30",
    subTitle: "On Hold",
    icon: "/images/stack-icon.png",
    helpText: "From Average Yesterday",
  },
  {
    id: "4",
    bgColor: "#FBEAEA",
    number: "150",
    subTitle: "Unassigned",
    icon: "/images/apps-icon.png",
    helpText: "From Average Yesterday",
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
          <Grid item xs={12} sm={6} md={4} lg={3} key={feature.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px",
                mb: "15px",
                backgroundColor: `${feature.bgColor}`
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "10px"
                }}
              >
                <Box>
                  <Typography
                    as="h1"
                    sx={{ fontSize: 28, fontWeight: 700 }}
                  >
                    {feature.number}
                  </Typography> 
                </Box>

                <Box>
                  <img src={feature.icon} alt="icon" />
                </Box>
              </Box>

              <Typography as="h3" fontSize={16} fontWeight={500} mb="5px">
                {feature.subTitle}
              </Typography>

              <Typography
                as="p"
                sx={{
                  fontSize: "13px", 
                }}
              >
                {feature.helpText}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Features;
