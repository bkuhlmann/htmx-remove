"use strict";

(function() {
  htmx.defineExtension("remove", {
    onEvent: (name, event) => {
      const element = event.detail.elt;

      if (name === "htmx:afterProcessNode") {
        const trigger = element.querySelector("[data-remove]");

        if (trigger !== null) {
          trigger.addEventListener("click", (triggerEvent) => {
            triggerEvent.preventDefault();
            element.remove();
          });
        }
      }
    }
  });
})();
