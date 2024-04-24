import React from "react";

function Home(props) {
  const { name, city, color } = props;

  const headerStyle = {
    color: color,
  };

  return (
    <div id="home">
      <h1 style={headerStyle}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
