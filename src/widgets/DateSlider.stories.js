import React from "react";
import DateSlider from "./DateSlider";
import { action } from "@storybook/addon-actions";
import "bootstrap/dist/css/bootstrap.css";

export default {
  component: DateSlider,
  title: "DataSlider"
};

export const Default = () => (
  <DateSlider earth_date="2015-6-3" onDateChanged={action("onDateChange")} />
);

export const DifferentDate = () => (
  <DateSlider earth_date="2011-12-31" onDateChanged={action("onDateChange")} />
);
