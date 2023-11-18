"use strict";

import { JSDOM } from "jsdom";
import { expect } from "chai";

describe("Extension", () => {
  var html = `
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <title>Demo</title>

        <meta charset="utf-8">

        <script src="https://unpkg.com/htmx.org@1.9.8"></script>
        <script src="../lib/htmx-remove.js"></script>
      </head>

      <body>
        <div hx-ext="remove"><button data-remove="true">Cancel</button></div>
      </body>
    </html>
  `;

  var dom = new JSDOM(html);

  it("displays element", () => {
    var button = dom.window.document.querySelector("button").innerHTML;
    expect(button).to.eq("Cancel");
  });

  it("removes element after being clicked");

  // TODO: Requires figuring out how to load htmx properly.
  // it("removes element after being clicked", () => {
  //   dom.window.document.querySelector("button").click();
  //   var button = dom.window.document.querySelector("button").innerHTML;

  //   expect(button).not.to.eq("Cancel");
  // });
});
