import React from "react";
import axios from "axios";
import Static from "./Statistic";
import { Container, Box } from "@material-ui/core";

export default class StaticApi extends React.Component {
  state = {
    arr: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://kaleidoscope.geostat.ge/kaleidoscope/generator.php?year=2019&month=2&period=year`
      )
      .then((res) => {
        const arr = res.data;
        this.setState({ arr: arr.arr.children });
        console.log(res.data);
      });
  }

  render() {
    return (
      <Container
        style={{
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",

          height: "initial",
        }}
      >
        {this.state.arr.map((person) => (
          <Static
            title={person.name}
            weight={person.weight}
            inflationval={person.inflationval}
          />
        ))}
      </Container>
    );
  }
}
