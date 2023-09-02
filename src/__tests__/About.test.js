import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders a <p> element with the bio from props", () => {
  const bio = "I made this"; 
  const links = {
    github: "https://github.com/yourusername", 
    linkedin: "https://linkedin.com/in/yourname", 
  };

  render(<About bio={bio} links={links} />);
  expect(screen.queryByText(bio)).toBeInTheDocument();
});

test("does not render a <p> element if the bio is not included in props", () => {
  const links = {
    github: "https://github.com/yourusername", 
    linkedin: "https://linkedin.com/in/yourname", 
  };

  const { container } = render(<About links={links} />);
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const bio = ""; 
  const links = {
    github: "https://github.com/1Wambugu", 
    linkedin: "https://linkedin.com/in/feed",
  };

  const { container } = render(<About bio={bio} links={links} />);
  expect(container.querySelector("p")).toBeNull();
});

