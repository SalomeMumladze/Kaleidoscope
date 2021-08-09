import axios from "axios";
import React, { useState, useEffect, Component } from "react";

// const baseURL =
//   "http://kaleidoscope.geostat.ge/kaleidoscope/generator.php?year=2019&month=2&period=year";

export default class Api extends Component {
  state = {
    persons: [],
  };
  //   const [post, setPost] = useState([]);

  //   useEffect(() => {
  //     axios.get(baseURL).then((response) => {
  //       setPost(response.data);
  //       console.log(response.data);
  //     });
  //   }, []);
  componentDidMount() {
    axios
      .get(
        `http://kaleidoscope.geostat.ge/kaleidoscope/generator.php?year=2019&month=2&period=year`
      )
      .then((res) => {
        console.log(res);
        this.setState({ persons: res.data });
      });
  }
  render() {
    return (
      <div>
        {this.state.persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </div>
    );
  }
}
