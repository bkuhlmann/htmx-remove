"use strict";

(function() {
  htmx.registerExtension("remove", {
    htmx_after_process: (element) => {
      const action = element.querySelector("[data-remove]");

      if (action) {
        action.addEventListener("click", (trigger) => {
          trigger.preventDefault();
          element.remove();
        });
      }
    }
  });
})();
