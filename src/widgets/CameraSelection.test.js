import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import CameraSelection from "./CameraSelection";

describe("CameraSelection", () => {
  describe("render", () => {
    let container;
    const cameras = {
      BC: "Big Camera",
      LC: "Little Camera"
    };
    let select;

    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
      ReactTestUtils.act(() => {
        ReactDOM.render(
          <CameraSelection
            camera={"LC"}
            cameras={cameras}
            onCameraSelected={() => {}}
          />,
          container
        );
      });
      select = container.querySelector("select");
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });

    it("Should display a select element", () => {
      expect(select).toBeDefined();
    });

    it("Should have the correct cameras", () => {
      expect(select.length).toBe(2);
      expect(select.options[0].text).toBe("Big Camera");
      expect(select.options[0].value).toBe("BC");
      expect(select.options[1].text).toBe("Little Camera");
      expect(select.options[1].value).toBe("LC");
    });

    it("Should select LC (Little Camera)", () => {
      expect(select.value).toBe("LC");
      expect(select.selectedOptions[0].text).toBe("Little Camera");
    });
  });
});
