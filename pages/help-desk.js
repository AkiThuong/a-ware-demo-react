import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css"; 
import Features from "@/components/Dashboard/HelpDesk/Features";
import TicketsStatus from "@/components/Dashboard/HelpDesk/TicketsStatus";
import CustomerSatisfaction from "@/components/Dashboard/HelpDesk/CustomerSatisfaction";
import SupportStatus from "@/components/Dashboard/HelpDesk/SupportStatus";
import AverageSpeedOfAnswer from "@/components/Dashboard/HelpDesk/AverageSpeedOfAnswer";
import AgentPerformance from "@/components/Dashboard/HelpDesk/AgentPerformance";
import TimeToResolveComplaint from "@/components/Dashboard/HelpDesk/TimeToResolveComplaint";
import Activity from "@/components/Dashboard/HelpDesk/Activity";

export default function HelpDesk() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Help/Support Desk</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Help or Support Desk</li>
        </ul>
      </div>

      {/* Features */}
      <Features />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* TicketsStatus */}
          <TicketsStatus />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* CustomerSatisfaction */}
          <CustomerSatisfaction />
        </Grid>
      </Grid>
 
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={12} md={6} lg={6}>
              {/* AverageSpeedOfAnswer */}
              <AverageSpeedOfAnswer />

              {/* TimeToResolveComplaint */}
              <TimeToResolveComplaint />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              {/* SupportStatus */}
              <SupportStatus />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* Activity */}
          <Activity />
        </Grid>
      </Grid>

      {/* AgentPerformance */}
      <AgentPerformance />
    </>
  );
}
