import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const $input = screen.getByRole("textbox");

    fireEvent.change($input, { target: { value: "Goku" } });

    expect($input.value).toBe("Goku");
  });

  test("debe de llamar onNewCategory() si el input tiene algun valor", () => {
    const inputValue = "Goku";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const $input = screen.getByRole("textbox");
    const $form = screen.getByRole("form");

    fireEvent.change($input, { target: { value: inputValue } });
    fireEvent.submit($form);

    expect($input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCategory() si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const $input = screen.getByRole("textbox");
    const $form = screen.getByRole("form");

    fireEvent.change($input, { target: { value: "" } });
    fireEvent.submit($form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
