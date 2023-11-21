"use strict";

(function(){
  htmx.defineExtension("remove", {
    onEvent: (name, event) => {
      const parent = event.detail.elt;

      if (name === "htmx:afterProcessNode") {
        const child = parent.querySelector("[data-remove]");

        if (child !== null) {
          child.addEventListener("click", (childEvent) => {
            childEvent.preventDefault();
            parent.remove();
          });
        }
      }
    }
  });
})();
