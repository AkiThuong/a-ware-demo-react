import React from "react";
import Grid from "@mui/material/Grid";
import ImpressionShare from "./ImpressionShare";
import GoalCompletions from "./GoalCompletions";
import Conversions from "./Conversions";
 
const ImpressionGoalConversions = () => {
  return (
    <>
      <div className="igc-box">
        <Grid container rowSpacing={1}>
          <Grid item xs={4} md={4} lg={4} xl={4}>
            <ImpressionShare />
          </Grid>

          <Grid item xs={4} md={4} lg={4} xl={4}>
            <GoalCompletions />
          </Grid>

          <Grid item xs={4} md={4} lg={4} xl={4}>
            <Conversions />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ImpressionGoalConversions;
