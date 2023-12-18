import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

const Trading = () => {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        {/* Card Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Trading
          </Typography>

          <Box>
            <Typography
              as="h6"
              sx={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <span className="primaryColor">Wallet Balance:</span> $12,426.07
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              background: "#f7faff",
              p: "15px",
              display: "flex",
              alignItems: "center",
              mb: "15px",
            }}
            className="bg-black"
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: "block",
                width: "100%",
                textTransform: "capitalize",
                borderRadius: "5px",
                lineHeight: '1',
                p: "15px",
                fontSize: "14px",
                color: "#fff !important", 
              }}
              className="mr-5px"
            >
              Buy Coin
            </Button>

            <Button
              variant="contained"
              color="secondary"
              sx={{
                display: "block",
                width: "100%",
                textTransform: "capitalize",
                borderRadius: "5px",
                lineHeight: '1',
                p: "15px",
                fontSize: "14px",
                color: "#fff !important", 
              }}
              className="ml-5px"
            >
              Sell Coin
            </Button>
          </Box>

          <Box component="form">
            <Grid container spacing="19px">
              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="currency"
                  sx={{ fontSize: "14px", fontWeight: "500", mb: "5px" }}
                >
                  Currency:
                </InputLabel>
                <FormControl fullWidth>
                  <InputLabel id="currency-label">Currency</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label="Currency"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>BTC</MenuItem>
                    <MenuItem value={20}>ETH</MenuItem>
                    <MenuItem value={30}>LTC</MenuItem>
                    <MenuItem value={30}>CDR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="currency"
                  sx={{ fontSize: "14px", fontWeight: "500", mb: "5px" }}
                >
                  Payment Method:
                </InputLabel>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="creditDebitCard"
                  label="Credit / Debit Card"
                  name="creditDebitCard"
                  autoComplete="credit-debit-card"
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="currency"
                  sx={{ fontSize: "14px", fontWeight: "500", mb: "5px" }}
                >
                  Amount:
                </InputLabel>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="creditDebitCard"
                  label="Credit / Debit Card"
                  name="creditDebitCard"
                  autoComplete="credit-debit-card"
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography as="p">Estimated Rate</Typography>

                  <Typography as="p">1 BTC ~ $34572.00</Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Typography as="p">Transaction Fees (0.05%)</Typography>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography as="p">Total</Typography>

                  <Typography as="p">72.00 BTC</Typography>
                </Box>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                color: "#fff !important",
                textTransform: "capitalize",
                lineHeight: '1',
                p: "17px 15px",
                fontSize: "15px",
              }}
              size="large"
            >
              Buy Coin
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Trading;
