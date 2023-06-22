import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid/GifGrid";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

jest.mock("../../src/Hooks/useFetchGifs");

describe("testing GifGrid component", () => {
  test("should show loading ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    const category = "dragon ball";

    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show items whe useFetchGifs load the img", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Dragon Ball",
        url: "http://.dragonball.com",
      },
      {
        id: "CBA",
        title: "Dragon Balls",
        url: "http://.dragonballs.com",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid />);
    screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
