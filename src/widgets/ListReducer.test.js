import React from "react";
import { render, fireEvent } from "@testing-library/react";
import List, {
  inputPlaceholder,
  defaultState,
  listReducer
} from "./ListReducer";

describe("List", () => {
  describe("Adding items to the list", () => {
    it("Should add a new item", () => {
      const { getByText, getByPlaceholderText, getByTestId } = render(<List />);

      const input = getByPlaceholderText(inputPlaceholder);
      const form = getByTestId("form");

      fireEvent.change(input, { target: { value: "one" } });
      fireEvent.submit(form);

      const firstItem = getByText("one");
      expect(firstItem).toBeDefined();
      expect(firstItem.tagName).toBe("LI");
      expect(input.value).toBe("");

      fireEvent.change(input, { target: { value: "two" } });
      fireEvent.submit(form);

      const secondItem = getByText("two");
      expect(secondItem).toBeDefined();
      expect(secondItem.tagName).toBe("LI");
      expect(input.value).toBe("");
    });
  });

  describe("reducer", () => {
    describe("Starting State", () => {
      it("Should start with an empty newItem", () => {
        const state = listReducer(defaultState, { type: "doesn't matter" });
        expect(state.newItem).toEqual("");
      });

      it("Should start with no items", () => {
        const state = listReducer(defaultState, { type: "doesn't matter" });
        expect(state.items).toEqual([]);
      });
    });

    describe("Adding characters", () => {
      it("Should add the characters to the new item", () => {
        const state = listReducer(defaultState, {
          type: "newItemChange",
          value: "a"
        });
        expect(state.newItem).toEqual("a");

        const state2 = listReducer(state, {
          type: "newItemChange",
          value: "ab"
        });
        expect(state2.newItem).toEqual("ab");
      });

      it("Should add nothing to list items", () => {
        const state = listReducer(defaultState, {
          type: "newItemChange",
          value: "a"
        });
        expect(state.items).toEqual([]);

        const state2 = listReducer(state, {
          type: "newItemChange",
          value: "ab"
        });
        expect(state2.items).toEqual([]);
      });
    });

    describe("Adding an item", () => {
      it("Should add a new item", () => {
        let state = listReducer({ items: [], newItem: "one" }, { type: "add" });
        expect(state.items).toEqual(["one"]);

        state = listReducer({ ...state, newItem: "two" }, { type: "add" });
        expect(state.items).toEqual(["one", "two"]);
      });

      it("Should clear new item", () => {
        let state = listReducer({ items: [], newItem: "one" }, { type: "add" });
        expect(state.newItem).toEqual("");

        state = listReducer({ ...state, newItem: "two" }, { type: "add" });
        expect(state.newItem).toEqual("");
      });
    });
  });
});
