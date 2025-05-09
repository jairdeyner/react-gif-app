import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas en getGifs()", () => {
  test("debede retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("goku");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
