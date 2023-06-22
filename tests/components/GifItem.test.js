import { GifItem } from "../../src/components/GifItem/GifItem";
import { render, screen } from "@testing-library/react";

describe("testing GiItem", () => {
  const title = "goku";
  const url = "https://aquiles-vaesta.com/xd.jpg";

  test("should match snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the img with url and the alt", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("title should be shown", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
