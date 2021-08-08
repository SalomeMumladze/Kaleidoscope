import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Text = (props) => {
  const classes = useStyles({
    color: props.color,
    margin: props.margin,
    fontSize: props.fontSize,
    fontSizeMd: props.fontSizeMd,
    fontSizeSm: props.fontSizeSm,
    lineHeight: props.lineHeight,
    lineHeightMd: props.lineHeightMd,
    marginSm: props.marginSm,
    fontWeight: props.fontWeight,
    height: props.height,
    fontWeight: props.fontWeight,
    width: props.width,
    widthSm: props.widthSm,
  });
  const { children, ...rest } = props;
  return <Typography className={classes.root}>{children}</Typography>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'FiraGO', sans-serif",
    textTransform: "none",
    width: (props) => props.width,
    width: (props) => props.widthSm,
    fontWeight: (props) => props.fontWeight,
    height: (props) => props.height,
    color: (props) => props.color,
    fontSize: (props) => props.fontSize || "14px",
    lineHeight: (props) => props.lineHeight || "14px",
    margin: (props) => props.margin,
    [theme.breakpoints.down("md")]: {
      fontSize: (props) => props.fontSizeLg,
      lineHeight: (props) => props.lineHeightMd,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: (props) => props.fontSizeSm,
      lineHeight: (props) => props.lineHeightSm,
      margin: (props) => props.marginSm,
    },
  },
}));

export default Text;
