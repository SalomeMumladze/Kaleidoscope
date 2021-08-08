import React from "react";
import { makeStyles } from "@material-ui/styles";
import CardContent from "@material-ui/core/CardContent";
import Text from "Components/Text";

const CustomizedCardTitle = (props) => {
  const classes = useStyles();
  const { name } = props;

  return (
    <CardContent className={classes.content}>
      <Text>{name}</Text>
    </CardContent>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
    padding: "30px 0px",
    paddingBottom: 0,
    background: "rgba(237,237,237, 0.4)",
    "& h2": {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "30px",
    },
    "& p": {
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "24px",
    },
  },
}));

export default CustomizedCardTitle;
