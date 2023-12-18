import React from 'react';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import LeftSidebar from '@/components/Apps/FileManager/LeftSidebar'; 
import MediaFiles from '@/components/Apps/FileManager/MediaFiles'; 

export default function Media() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Media</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Media</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          {/* LeftSidebar */}
          <LeftSidebar />
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
          {/* MediaFiles */}
          <MediaFiles />
        </Grid>
      </Grid>
    </>
  );
}
