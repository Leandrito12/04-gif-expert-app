import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "../../src/components/Input/Input";

describe("testing Input component", () => {
  test("should change input value ignoring props function", () => {
    render(<Input addCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "goku" } });
    expect(input.value).toEqual("goku");
  });

  test("should call addcategory if input has a value", () => {
    const inputValue = "goku";
    const addCategory = jest.fn();
    render(<Input addCategory={addCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledTimes(1);
    expect(addCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call addCategory if input is empty", () => {
    const inputValue = "";
    const addCategory = jest.fn();
    render(<Input addCategory={addCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(addCategory).toHaveBeenCalledTimes(0);
  });
});
