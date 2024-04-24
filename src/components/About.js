import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, links } = props;

  const renderBio = () => {
    if (bio && bio.length > 0) {
      return <p>{bio}</p>;
    }
    return null;
  };

  return (
    <div id="about">
      <h2>About Me</h2>
      {renderBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
