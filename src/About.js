import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function About() {
  const { user } = useContext(UserContext);
  console.log("USER: ", user);

  return (
    <div>
      About
      <div>{user && <pre>{JSON.stringify(user, null, 2)}</pre>}</div>
    </div>
  );
}

export default About;
