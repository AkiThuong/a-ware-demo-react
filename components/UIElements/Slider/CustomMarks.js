import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function CustomMarks() {
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
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '10px'
          }}
        >
          Custom Marks
        </Typography>

        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
      </Card>
    </>
  );
}
