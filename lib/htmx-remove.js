"use strict";

(function(){
  htmx.defineExtension("remove", {
    onEvent: (name, event) => {
      if (name === "htmx:afterProcessNode") {
        const element = event.detail.elt;
        const target = element.querySelector("[data-remove]");

        if (target !== null) {
          target.addEventListener("click", () => {
            element.remove();
          });
        }
      }
    }
  });
})();
