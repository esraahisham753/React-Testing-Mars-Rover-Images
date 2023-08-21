import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("Counter", () => {
  it("Should render a counter of 0", () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/ah ah ah/);
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toBe("0 ah ah ah");
  });

  it("Should increment 1 on each click", () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/ah ah ah/);
    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe("1 ah ah ah");
    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe("2 ah ah ah");
  });
});
