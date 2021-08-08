import React from "react";
import { Box, Grid } from "@material-ui/core";
import Text from "Components/Text";
import Dialog from "./Dialog";
import Period from "./Period";

const Instruction = () => {
  return (
    <>
      <Dialog />
      <Text fontSize="17px" margin="10px">
        დროის პერიოდი
      </Text>
      <Period />
    </>
  );
};

export default Instruction;
