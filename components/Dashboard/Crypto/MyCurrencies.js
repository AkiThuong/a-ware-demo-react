import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const MyCurrencies = () => {
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
            My Currencies
          </Typography>

          <Box>
            <Button
              size="small"
              sx={{
                fontSize: 14,
                textTransform: "capitalize",
                fontWeight: "normal",
                color: "#5B5B98",
                padding: "2px 10px",
                minWidth: "auto",
              }}
            >
              Buy
            </Button>

            <Button
              size="small"
              sx={{
                fontSize: 14,
                textTransform: "capitalize",
                fontWeight: "normal",
                color: "#5B5B98",
                padding: "0",
                padding: "2px 10px",
                minWidth: "auto",
              }}
            >
              Sell
            </Button>

            <Button
              size="small"
              sx={{
                fontSize: 14,
                textTransform: "capitalize",
                fontWeight: "normal",
                color: "#5B5B98",
                padding: "0",
                padding: "2px 10px",
                minWidth: "auto",
              }}
            >
              All
            </Button>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            maxHeight: "450px",
            overflowY: "auto",
          }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-label="My Currencies"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Coin Name
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Price
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  24h Change
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Total Balance
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Total Coin
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Operation
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img 
                    src="/images/bitcoin4.png" 
                    alt="bitcoin" 
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '100%'
                    }}
                  />

                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Bitcoin
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  $48,568.025
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF" }}
                  align="center"
                >
                  <Typography
                    as="p"
                    className="successColor"
                    fontSize="14px"
                    display="flex"
                  >
                    <TrendingUpIcon sx={{ mr: "5px" }} /> +2.48%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  <b style={{ fontWeight: "500" }}>12,565.75</b> USD
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.2040</b> BTC
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <Button
                    size="small"
                    color="primary"
                    sx={{
                      fontSize: 14,
                      textTransform: "capitalize",
                      fontWeight: "500",
                      padding: "0",
                      padding: "2px 10px",
                      minWidth: "auto",
                    }}
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/ethereum3.png" alt="ethereum" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '100%'
                    }} />

                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Ethereum
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  $1,876.76
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF" }}
                  align="center"
                >
                  <Typography
                    as="p"
                    className="dangerColor"
                    fontSize="14px"
                    display="flex"
                  >
                    <TrendingDownIcon sx={{ mr: "5px" }} /> -3.48%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  <b style={{ fontWeight: "500" }}>4,565.75</b> USD
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.2040</b> ETH
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <Button
                    size="small"
                    color="primary"
                    sx={{
                      fontSize: 14,
                      textTransform: "capitalize",
                      fontWeight: "500",
                      padding: "0",
                      padding: "2px 10px",
                      minWidth: "auto",
                    }}
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/binance.png" alt="binance" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '100%'
                    }} />

                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Binance
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  $278.87
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF" }}
                  align="center"
                >
                  <Typography
                    as="p"
                    className="successColor"
                    fontSize="14px"
                    display="flex"
                  >
                    <TrendingUpIcon sx={{ mr: "5px" }} /> +1.08%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  <b style={{ fontWeight: "500" }}>20,565.75</b> USD
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.2040</b> BTC
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <Button
                    size="small"
                    color="primary"
                    sx={{
                      fontSize: 14,
                      textTransform: "capitalize",
                      fontWeight: "500",
                      padding: "0",
                      padding: "2px 10px",
                      minWidth: "auto",
                    }}
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/litecoin3.png" alt="litecoin" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '100%'
                    }} />

                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Litecoin
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  $89.98
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF" }}
                  align="center"
                >
                  <Typography
                    as="p"
                    className="successColor"
                    fontSize="14px"
                    display="flex"
                  >
                    <TrendingUpIcon sx={{ mr: "5px" }} /> +2.05%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  <b style={{ fontWeight: "500" }}>7,565.75</b> USD
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.2040</b> LTC
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <Button
                    size="small"
                    color="primary"
                    sx={{
                      fontSize: 14,
                      textTransform: "capitalize",
                      fontWeight: "500",
                      padding: "0",
                      padding: "2px 10px",
                      minWidth: "auto",
                    }}
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/cardano.png" alt="cardano" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '100%'
                    }} />

                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Cardano
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  $37.32
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF" }}
                  align="center"
                >
                  <Typography
                    as="p"
                    className="dangerColor"
                    fontSize="14px"
                    display="flex"
                  >
                    <TrendingDownIcon sx={{ mr: "5px" }} /> -1.01%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  <b style={{ fontWeight: "500" }}>1,431.75</b> USD
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.2040</b> CDR
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <Button
                    size="small"
                    color="primary"
                    sx={{
                      fontSize: 14,
                      textTransform: "capitalize",
                      fontWeight: "500",
                      padding: "0",
                      padding: "2px 10px",
                      minWidth: "auto",
                    }}
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default MyCurrencies;
