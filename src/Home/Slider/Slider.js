import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/styles";
import ImageSlider from "./ImageSlider";
import inplacia from "assets/img/personaluri-inplacia.png";
import { Container, Box } from "@material-ui/core";

const OurTeam = (props, ref) => {
  const classes = useStyles();

  return (
    <Box bgcolor="white">
      <Container>
        <section ref={ref} className={classes.team}>
          <ImageSlider slides={members} />
        </section>
      </Container>
    </Box>
  );
};

const members = [
  {
    img: inplacia,
    name: "პერსონალური ინფლაციის კალკულატორი",
    href: "https://www.geostat.ge/personalinflation/",
  },
  {
    img: inplacia,
    name: "სფი კალკულატორი",
    href: "https://www.geostat.ge/cpi/",
  },
  {
    img: inplacia,
    name: "პერსონალური ინფლაციის კალკულატორი",
    href: "https://www.geostat.ge/personalinflation/",
  },
  {
    img: inplacia,
    name: "სფი კალკულატორი",
    href: "https://www.geostat.ge/cpi/",
  },
  {
    img: inplacia,
    name: "სფი კალკულატორი",
    href: "https://www.geostat.ge/cpi/",
  },
];

const useStyles = makeStyles((theme) => ({
  team: {
    padding: "90px 0px",
  },
}));

export default forwardRef(OurTeam);
