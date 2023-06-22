import { GifItem } from "../../src/components/GifItem/GifItem";
import { render } from "@testing-library/react";

describe("testing GiItem", () => {
  const title = "goku";
  const url = "https://aquiles-vaesta.com/xd.jpg";
  test("should match snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
