import React from "react";

class Map extends React.Component {
  render() {
    const string = ["Aprendendo", "React", "Codecademy"];
    const liststring = string.map((value) => {
      return <li>{value}</li>;
    });
    const list = <ul>{liststring}</ul>;

    return <div>{list}</div>;
  }
}
export default Map;