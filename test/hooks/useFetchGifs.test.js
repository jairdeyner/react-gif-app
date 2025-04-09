import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("pruebas en el hook useFetchGifs", () => {
  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Goku"));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de gifs y el isLoading en fase", async () => {
    const { result } = renderHook(() => useFetchGifs("Goku"));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
