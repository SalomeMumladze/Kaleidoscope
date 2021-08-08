import React from "react";
import { Container, Box, Link, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Text from "Components/Text";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const LinkButton = (props, { children }) => {
  const classes = useStyles({
    color: props.color,
    margin: props.margin,
    fontSize: props.fontSize,
    fontSizeMd: props.fontSizeMd,
    fontSizeSm: props.fontSizeSm,
    lineHeight: props.lineHeight,
    lineHeightMd: props.lineHeightMd,
    fontWeight: props.fontWeight,
    height: props.height,
    fontWeight: props.fontWeight,
    width: props.width,
  });
  return (
    <div>
      <Link
        className={classes.link}
        href={props.href}
        target="_blank"
        color="inherit"
      >
        <IconButton className={classes.button}>
          <div className={classes.iconCont}>
            {props.iconType === "shop" ? (
              <ShoppingCartIcon />
            ) : (
              <LibraryBooksIcon />
            )}
          </div>
          <Text margin="5px" fontSizeSm="10px" marginSm="0px">
            {props.title}
          </Text>
        </IconButton>
      </Link>
    </div>
  );
};

export default LinkButton;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex", 
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
  },
  button: {
    background: (props) => theme.colors[props.background || "red"],
    color: "white",
    margin: "0px 5px",
    borderRadius: 5,
    "&:hover": {
      background: "rgba(245, 44, 62)",
      boxShadow: "0px 6px 3px 1px rgb(245 44 62 / 20%)",
      position: "relative",
      bottom: 2,
      transition: "0.2s",
    },
    [theme.breakpoints.down("xs")]: { padding: "5px" },
  },
  iconCont: { [theme.breakpoints.down("xs")]: { display: "none" } },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
