import React from "react";
import { render, wait } from "@testing-library/react";
import RandomImage from "./RandomImage";

describe("RandomImage", () => {
  describe("Integration tests", () => {
    it("Should render an image with a url", async () => {
      const { getByAltText } = render(<RandomImage />);
      await wait(() => {
        const image = getByAltText("Mars Rover");
        expect(image.src).toMatch(/http/);
      });
    });
  });
});
