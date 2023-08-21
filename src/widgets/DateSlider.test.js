import React from "react";
import DateSlider from "./DateSlider";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import { dateToSol, solToDate } from "../services/sols";

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

  describe("change", () => {
    it("should display the selected date", () => {
      const fn = jest.fn();
      const { getByTestId } = render(
        <DateSlider earth_date={"2017-5-13"} onDateChanged={fn} />
      );
      const input = getByTestId("date-slider");
      fireEvent.change(input, { target: { value: "3877" } });
      expect(fn.mock.calls).toEqual([[solToDate("3877")]]);
    });
  });
});
