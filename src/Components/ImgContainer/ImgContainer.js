import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const ImgContainer = (props) => {
  const classes = useStyles({
    width: props.width,
    height: props.height,
    margin: props.margin,
    marginLeft: props.marginLeft,
    position: props.position,
    left: props.left,
    top: props.top,
    background: props.background,
    borderRadius: props.borderRadius,
    boxShadow: props.boxShadow,
  });
  const { ...rest } = props;
  return <img className={classes.root} src={props.src} {...rest} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    objectFit: "cover",
    boxShadow: (props) => props.boxShadow,
    width: (props) => props.width,
    height: (props) => props.height,
    margin: (props) => props.margin,
    marginLeft: (props) => props.marginLeft,
    position: (props) => props.position,
    top: (props) => props.top,
    left: (props) => props.left,
    background: (props) => props.background,
    borderRadius: (props) => props.borderRadius,
  },
}));

export default ImgContainer;
