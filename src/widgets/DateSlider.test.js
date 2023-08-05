import React from "react";
import DateSlider from "./DateSlider";
import { getByTestId, render } from "@testing-library/react";
import { dateToSol } from "../services/sols";

describe("DateSlider", () => {
  describe("render", () => {
    it("Should return a container", () => {
      const { container } = render(
        <DateSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      );
      expect(container).toBeDefined();
    });

    it("Should display the correct date", () => {
      const { getByTestId } = render(
        <DateSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      );
      const date = getByTestId("date-label");
      expect(date).toHaveTextContent("2017-5-3");
    });

    it("should reflect right position on slider", () => {
      const { getByTestId } = render(
        <DateSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      );
      const input = getByTestId("date-slider");
      expect(input).toHaveValue(dateToSol("2017-5-3").toString());
      //expect(input).toHaveValue("100");
    });
  });
});
