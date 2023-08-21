import React from "react";
import reactTestRenderer from "react-test-renderer";
import RoverSelector from "./RoverSelector";
import { rovers } from "../pages/ConnectedRoverSearch";

describe("RoverSelector", () => {
  describe("rendering", () => {
    describe("All rovers are selected", () => {
      it("Should select all rovers", () => {
        const all = { spirit: true, opportunity: true, curiosity: true };
        let tr = reactTestRenderer.create(
          <RoverSelector
            roversActive={all}
            roverSelection={all}
            rovers={rovers}
            onRoverSelection={() => {}}
          />
        );
        let inputs = tr.root.findAllByProps({
          "data-testid": "rover-selected"
        });
        inputs.forEach(i => {
          expect(i.props.checked).toBe(true);
        });
      });
    });

    describe("None of the rovers is selected", () => {
      it("Should select no rovers", () => {
        const none = { spirit: false, opportunity: false, curiosity: false };
        let tr = reactTestRenderer.create(
          <RoverSelector
            roversActive={none}
            roverSelection={none}
            rovers={rovers}
            onRoverSelection={() => {}}
          />
        );
        let inputs = tr.root.findAllByProps({
          "data-testid": "rover-selected"
        });
        inputs.forEach(i => {
          expect(i.props.checked).toBe(false);
        });
      });
    });
  });

  describe("activation", () => {
    describe("All rovers are activated", () => {
      it("Should not have RoverSelector-inactive", () => {
        const all = { spirit: true, opportunity: true, curiosity: true };
        const classRegExp = /.*RoverSelector-inactive/;
        let tr = reactTestRenderer.create(
          <RoverSelector
            roversActive={all}
            roverSelection={all}
            rovers={rovers}
            onRoverSelection={() => {}}
          />
        );

        const divs = tr.root.findAll(instance => {
          (instance.props["data-testid"] || "").startsWith("rover-div-");
        });

        divs.forEach(div => {
          div.props.className.not.toMatch(classRegExp);
        });
      });
    });

    describe("All rovers are not activated", () => {
      it("Should have RoverSelector-inactive", () => {
        const none = { spirit: false, opportunity: false, curiosity: false };
        const classRegExp = /.*RoverSelector-inactive/;
        let tr = reactTestRenderer.create(
          <RoverSelector
            roversActive={none}
            roverSelection={none}
            rovers={rovers}
            onRoverSelection={() => {}}
          />
        );

        const divs = tr.root.findAll(instance => {
          (instance.props["data-testid"] || "").startsWith("rover-div-");
        });

        divs.forEach(div => {
          div.props.className.toMatch(classRegExp);
        });
      });
    });

    describe("Mixed rovers activation", () => {
      it("Should have Rover inactive class on inactive rovers", () => {
        const activation = {
          spirit: false,
          opportunity: true,
          curiosity: true
        };
        const classRegExp = /.*RoverSelector-inactive/;
        let tr = reactTestRenderer.create(
          <RoverSelector
            roversActive={activation}
            roverSelection={activation}
            rovers={rovers}
            onRoverSelection={() => {}}
          />
        );

        Object.keys(activation).forEach(roverName => {
          const div = tr.root.findByProps({
            "data-testid": "rover-div-" + roverName
          });
          if (activation[roverName]) {
            expect(div.props.className).not.toMatch(classRegExp);
          } else {
            expect(div.props.className).toMatch(classRegExp);
          }
        });
      });
    });
  });
});
