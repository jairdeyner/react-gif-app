import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("pruebas en <GifItem />", () => {
  const title = "Goku";
  const url = "https://goku.com/goku.png";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);

    const $img = screen.getByRole("img");

    expect($img.src).toBe(url);
    expect($img.alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
