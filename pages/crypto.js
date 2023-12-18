import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import Features from "@/components/Dashboard/Crypto/Features";
import MarketGraph from "@/components/Dashboard/Crypto/MarketGraph";
import CurrentRate from "@/components/Dashboard/Crypto/CurrentRate";
import MyProfile from "@/components/Dashboard/Crypto/MyProfile";
import UserActivities from "@/components/Dashboard/Crypto/UserActivities";
import OrdersActivities from "@/components/Dashboard/Crypto/OrdersActivities";
import MyCurrencies from "@/components/Dashboard/Crypto/MyCurrencies";
import Trading from "@/components/Dashboard/Crypto/Trading";

export default function Crypto() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Crypto</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Crypto</li>
        </ul>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={9}>
          {/* Features */}
          <Features />

          {/* MarketGraph */}
          <MarketGraph />

          {/* CurrentRate */}
          <CurrentRate />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={3}>
          {/* MyProfile */}
          <MyProfile />

          {/* UserActivities */}
          <UserActivities />
        </Grid>
      </Grid>

      {/* OrdersActivities */}
      <OrdersActivities />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* MyCurrencies */}
          <MyCurrencies />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* Trading */}
          <Trading />
        </Grid>
      </Grid>
    </>
  );
}
