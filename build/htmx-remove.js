"use strict";(function(){htmx.defineExtension("remove",{onEvent:(e,t)=>{if(e==="htmx:afterProcessNode"){const n=t.detail.elt;const o=n.querySelector("[data-remove]");if(o!==null){o.addEventListener("click",()=>{n.remove()})}}}})})();