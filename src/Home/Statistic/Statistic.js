import React from "react";
import { Container, Box } from "@material-ui/core";
import statistics from "./statArray";
import ImgContainer from "Components/ImgContainer";
import Text from "Components/Text";
import { makeStyles } from "@material-ui/core/styles";

function Statistic(props) {
  const classes = useStyles();
  return (
    <Container className={classes.list}>
      {/* {statistics.map((statistic) => ( */}
        <div className={classes.container}>
          <ImgContainer
            position="absolute"
            top="-25px"
            left="25px"
            background="rgba(17,128,229, 0.5)"
            borderRadius="50%"
            boxShadow="0px 17px 15px -10px rgb(17 128 229 / 30%)"
            // src={statistic.img}
          />
          <Box>
            <div>
              <Text
                margin="20px 0px 0px 0px"
                fontWeight="600"
                lineHeight="16px"
                fontSize="15px"
              >
                {props.title}
              </Text>
              <Text
                fontSize="13px"
                lineHeight="14px"
                fontFamily="'FiraGOLight'"
                color="#808080"
                margin="10px 0px"
              >
                {/* {statistic.desc} */}
              </Text>
            </div>
            <div className={classes.perc}>
              <div>
                <Text
                  margin="10px"
                  fontWeght="600"
                  fontSize="13px"
                  fontFamily="'FiraGOLight'"
                >
                  ჯგუფის წონა
                </Text>
                <span className={classes.weight}>{props.weight} %</span>
              </div>
              <div>
                <Text
                  margin="10px"
                  fontWeght="600"
                  fontSize="13px"
                  fontFamily="'FiraGOLight'"
                >
                  ფასის ცვლილება
                </Text>
                <span className={classes.price}>{props.inflationval}%</span>
              </div>
            </div>
          </Box>
        </div>
       {/* ))} */}
    </Container>
  );
}

export default Statistic;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    width: "260px",
    height: "157px",
    padding: "20px",
    background: "white",
    borderRadius: "30px",
    marginTop: 30,
    position: "relative",
  },
  perc: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-around",
    borderTop: "1px solid rgba(0,0,0, 0.1)",
    padding: "5px 0px 20px 0px",
    bottom: 0,
    position: "absolute",
  },
  weight: {
    background: "rgba(17, 128, 229, 0.5)",
    borderRadius: 15,
    fontSize: 13,
    padding: 5,
  },
  price: {
    background: "rgba(235,90,146, 0.5)",
    borderRadius: 15,
    fontSize: 13,
    padding: 5,
  },
}));
