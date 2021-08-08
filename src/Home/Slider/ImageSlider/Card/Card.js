import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Link } from "@material-ui/core";
import CardContent from "./CardContent";
import CardImage from "./CardImage";

const CustomizedCard = (props) => {
  const classes = useStyles();
  const { slide, curr } = props;

  return (
    <Link
      href={slide.href}
      target="_blank"
      style={{ transform: `translateX(${curr}00%)`, margin: 10 }}
      className={classes.slide}
    >
      <Card className={classes.card}>
        <CardImage img={slide.img} />

        <CardContent name={slide.name} />
      </Card>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  slide: {
    transition: ".5s",
    minWidth: "32%",
    "&:hover": {
      textDecoration: "none",
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
  card: {
    borderRadius: 5,
    background: "transparent",
    boxShadow: "none",
    position: "relative",
    "&:hover": {
      boxShadow: "5px 2px 7px 0px rgb(0 0 0 / 31%)",
    },
  },
}));

export default CustomizedCard;
