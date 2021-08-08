import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Year from "./Year";
import Month from "./Month";
import Comparison from "./Comparison";
import BlockButton from "Components/Buttons/BlockButton";
import { Box } from "@material-ui/core";
import Text from "Components/Text";

export default function Period() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        <Year />
        <Month />
      </Box>
      <Comparison />
      <BlockButton width="200px" margin="10px">
        განახლება
      </BlockButton>
      <Text
        fontSize="17px"
        lineHeight="21px"
        margin="10px"
        width="410px"
        widthSm="100%"
      >
        2021 წლის ივლისში ინფლაციის დონემ წინა წლის შესაბამის თვესთან შედარებით
        შეადგინა 11.91%
      </Text>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alitItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
