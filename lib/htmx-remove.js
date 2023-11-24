"use strict";

(function(){
  htmx.defineExtension("remove", {
    onEvent: (name, event) => {
      const extension = event.detail.elt;

      if (name === "htmx:afterProcessNode") {
        const trigger = extension.querySelector("[data-remove]");

        if (trigger !== null) {
          trigger.addEventListener("click", (triggerEvent) => {
            triggerEvent.preventDefault();
            extension.remove();
          });
        }
      }
    }
  });
})();
