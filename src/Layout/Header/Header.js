import React from "react";
import { Container, Box } from "@material-ui/core";
import logo from "assets/img/geo-logo.png";
import eng from "assets/img/eng.png";
import { makeStyles } from "@material-ui/core/styles";
import ImgContainer from "Components/ImgContainer";
import LinkButton from "Components/LinkButton";

const Header = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="white">
      <Container className={classes.root}>
        <ImgContainer width="100px" height="75px" src={logo} />
        <Box display="flex" alignItems="center">
          {links.map((link) => (
            <LinkButton
              href={link.link}
              iconType={link.icon}
              title={link.title}
            ></LinkButton>
          ))}

          <ImgContainer
            marginLeft="10px"
            width="36px"
            height="23px"
            src={eng}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
  },
}));

const links = [
  {
    title: " პრეს რელიზი",
    link: "https://www.geostat.ge/ka/relationsOfCategory/25/post",
    icon: "linrary",
  },
  {
    title: "სამომხმარებლო კალათა",
    link: "https://www.geostat.ge/media/36259/%E1%83%98%E1%83%9C%E1%83%A4%E1%83%9A%E1%83%90%E1%83%AA%E1%83%98%E1%83%98%E1%83%A1-%E1%83%92%E1%83%90%E1%83%90%E1%83%9C%E1%83%92%E1%83%90%E1%83%A0%E1%83%98%E1%83%A8%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%94%E1%83%97%E1%83%9D%E1%83%93%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%A1%E1%83%90%E1%83%AE%E1%83%94%E1%83%91_2021.pdf",
    icon: "shop",
  },
];
