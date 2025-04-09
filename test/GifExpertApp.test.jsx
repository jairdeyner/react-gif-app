import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("pruebas en <GifExpertApp />", () => {
  test("debe de renderizar los gifs por default (Goku)", () => {
    render(<GifExpertApp />);

    expect(screen.getByText("Goku")).toBeTruthy();
  });

  test("debe de renderizar la categoria buscada al llamar onAddCategory() si la categoria no existe en la lista", () => {
    render(<GifExpertApp />);
    const $input = screen.getByRole("textbox");
    const $form = screen.getByRole("form");

    fireEvent.change($input, { target: { value: "Naruto" } });
    fireEvent.submit($form);

    expect(screen.getByText("Naruto")).toBeTruthy();
  });

  test("debe no renderizar la categoria si la categoria buscada existe", () => {
    render(<GifExpertApp />);
    const $input = screen.getByRole("textbox");
    const $form = screen.getByRole("form");

    fireEvent.change($input, { target: { value: "Goku" } });
    fireEvent.submit($form);

    expect(screen.getAllByText("Goku").length).toBe(1);
  });
});
