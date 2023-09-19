import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"; // Make sure you import the Links component

import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home
        name={user.name}
        city={user.city}
        color={user.color}
      />
      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
      <Links github={user.links.github} linkedin={user.links.linkedin} /> {/* Pass github and linkedin props */}
    </div>
  );
}

export default App;