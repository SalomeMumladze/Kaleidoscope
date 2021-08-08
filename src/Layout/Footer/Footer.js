import React from "react";
import { Container, Box } from "@material-ui/core";
import Text from "Components/Text";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box p={8} textAlign="center" boxShadow={3}>
      <Container>
        <Box>
          <FacebookIcon className={classes.fc} />
          <TwitterIcon className={classes.tw} />
        </Box>
        <Text color="gray" margin="20px 0px">
          © 2019 ყველა უფლება დაცულია.
        </Text>
        <Text color="gray">
          საქართველოს სტატისტიკის ეროვნული სამსახური (საქსტატი)
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  fc: {
    color: "#3b5998 ",
    margin: 10,
  },
  tw: {
    color: "#1DA1F2",
    margin: 10,
  },
}));
