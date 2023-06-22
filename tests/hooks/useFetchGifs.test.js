import { useFetchGifs } from "../../src/Hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("testing useFetchGifs hook", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("dragon ball"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array of img and isLoading false", async () => {
    const { result } = renderHook(() => useFetchGifs("dragon ball"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 2000,
      }
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
