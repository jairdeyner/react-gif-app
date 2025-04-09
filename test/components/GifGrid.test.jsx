import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
  const category = "Goku";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("debe de mostrar items cuando se cargan los gifs devuelto por useFetchGifs()", () => {
    const gifs = [
      {
        id: "abc",
        title: "goku",
        url: "https://gku.com/goku.png",
      },
      {
        id: "123",
        title: "naruto",
        url: "https://nrt.com/naruto.png",
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
