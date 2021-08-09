import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import Instruction from "./Instruction";
import circle from "assets/img/circle.png";

function Calculation() {
  return (
    <Container>
      <Box my={5}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Instruction />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img src={circle} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Calculation;
