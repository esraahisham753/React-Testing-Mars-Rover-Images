import React from "react";
import Message from "./Message";

describe("Message", () => {
  it("Should render message", () => {
    const notImportantMessage = Message({
      content: "I see everything twice",
      isImportant: false
    });

    expect(notImportantMessage.props.children.props.children).toBe(
      "I see everything twice"
    );

    const importantMessage = Message({
      content: "I see everything twice",
      isImportant: true
    });

    expect(importantMessage.props.children.props.children).toBe(
      "I see everything twice"
    );
  });

  it("Should render important message in strong tag", () => {
    const importantMessage = Message({
      content: "I see everything twice",
      isImportant: true
    });

    expect(importantMessage.props.children.type).toBe("strong");
  });

  it("Should not render unimportant message in a strong tag", () => {
    const notImportantMessage = Message({
      content: "I see everything twice",
      isImportant: false
    });

    expect(notImportantMessage.props.children.type).not.toBe("strong");
  });
});
