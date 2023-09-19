import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Links from "../../components/Links"; // Corrected import path

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" />);
  expect(screen.queryByText("https://github.com/liza")).toBeInTheDocument();
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" />);
  expect(screen.queryByText("https://www.linkedin.com/in/liza/")).toBeInTheDocument();
});
