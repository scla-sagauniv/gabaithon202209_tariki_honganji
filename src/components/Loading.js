import React from "react";
import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";

export const Loading = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'>
      <CircularProgress color='success' />
    </Grid>
  );
};
