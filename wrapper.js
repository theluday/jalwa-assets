// wrapper.js (hosted in the same repo)
const CSS_URL = "https://theluday.github.io/jalwa-assets/jalwa.css";
const JS_URL  = "https://theluday.github.io/jalwa-assets/jalwa-party-trays.iife.js";

// inject Tailwind CSS
(function () {
  if (!document.querySelector('link[data-jalwa-css]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CSS_URL;
    link.setAttribute('data-jalwa-css', '1');
    document.head.appendChild(link);
  }
})();

// load React bundle and define <jalwa-party-trays>
(function () {
  function defineEl() {
    class JalwaEl extends HTMLElement {
      connectedCallback() {
        if (window.JalwaPartyTrays?.mount) {
          window.JalwaPartyTrays.mount(this);
        } else {
          console.error("JalwaPartyTrays.mount not found");
        }
      }
    }
    if (!customElements.get('jalwa-party-trays')) {
      customElements.define('jalwa-party-trays', JalwaEl);
    }
  }
  const s = document.createElement('script');
  s.src = JS_URL;
  s.onload = defineEl;
  document.head.appendChild(s);
})();
