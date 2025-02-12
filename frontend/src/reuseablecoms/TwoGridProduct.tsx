import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Underline } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export default function TwoGridProduct({}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        ".text",
        { y: 50, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            end: "bottom top",
          },
        },
      );
    }
  }, []);

  return (
    <Box
      ref={boxRef}
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
              backgroundImage: "url(./homeImgs/banner-cls1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
          />
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
              className="text"
              sx={{ fontWeight: "bold" }}
            >
              Crossbody bag
            </Typography>
            <Typography className="text">
              From beach to party: Perfect styles for every occasion.
            </Typography>
            <Typography className="text">
              <Link to={"/allproducts"}>Shop Now</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={6}
          sx={{
            background: "red",
            backgroundImage: "url(./homeImgs/banner-cls2.jpg)",
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
            <Typography variant="h4" className="text">
              Capsule Collection
            </Typography>
            <Typography variant="body1" className="text">
              Reserved for special occasions
            </Typography>
            <Typography variant="body1" className="text">
              <Link to={"/allproduct"} style={{ textDecoration: "underline" }}>
                Shop Now
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
