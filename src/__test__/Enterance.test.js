import Enterance from "../components/Enterance";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import List from "../components/List";

describe("Enterance unit test", () => {
  render(
    <BrowserRouter>
      <Enterance />
      <List />
    </BrowserRouter>
  );

  it("1.πͺ μ΄λͺ¨ν°μ½μ΄ νλ©΄μ λνλκ³  μ΄λͺ¨ν°μ½μ λλ₯΄λ©΄ μ΄λνλ€.", () => {
    const button = screen.getByText("πͺ");

    userEvent.click(button);

    expect(screen.getByText("TODO LISTβ³")).toBeInTheDocument();
  });
});
