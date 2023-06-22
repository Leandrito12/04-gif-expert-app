import { getGifs } from "../../src/helpers/getGifs";

describe("testing geGifs function", () => {
  test("should return a gif block", async () => {
    const gifs = await getGifs("dragon ball");

    expect(gifs.length).toBeGreaterThan(0);
  });

  test("gif should be an object with X format", async () => {
    const gifs = await getGifs("dragon ball");

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
