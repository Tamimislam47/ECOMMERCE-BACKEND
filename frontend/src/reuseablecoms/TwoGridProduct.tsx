import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {};

export default function TwoGridProduct({}: Props) {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "80%",
        },

        height: "68vh",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Grid
          size={6}
          sx={{
            height: "100%",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              height: "85%",
              backgroundImage: "url(./homeImgs/banner-cls1.jpg )",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
          ></Box>
          <Box
            sx={{
              height: "15%",
              width: "100%",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Crossbody bag
            </Typography>
            <Typography>
              From beach to party: Perfect styles for every occasion.
            </Typography>
            <Typography>
              <Link to={"/allproducts"}>Shop Now</Link>
            </Typography>
          </Box>
          I
        </Grid>
        <Grid
          size={6}
          sx={{
            background: "red",
            backgroundImage: "url(./homeImgs/banner-cls2.jpg )",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Typography variant="h4">Capsule Collection</Typography>
            <Typography variant="body1">
              Reserved for special occasions
            </Typography>

            <Typography variant="body1">
              <Link to={"/allproduct"}>Shop Now</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
