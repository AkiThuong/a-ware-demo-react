import React from "react";
import Grid from "@mui/material/Grid";
import styles from "@/components/Dashboard/Analytics/Welcome/Welcome.module.css";

const ProfileContent = () => {
  return (
    <>
      <div className={styles.welcomeBox}>
        <div className={styles.welcomeContent}>
          <h1>Welcome to admash Dashboard!</h1>
          <p>
            You have done 68% 😎 more sales today. Check your new badge in
            your profile.
          </p>
        </div>
        <img src="/images/shape-1.png" alt="shape" />
      </div> 
    </>
  );
};

export default ProfileContent;
