import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


let urlCharacters = [];
// https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/727562
// select <code> elements with data-class includes "23"
document.querySelectorAll('code[data-class^="23"]').forEach(code => {
  // Find <div> within <code> with data-tag ending in "93"
  const div = code.querySelector('div[data-tag$="93"]');
  if (div) {
    // Find <span> within <div> with data-id containing "21"
    const span = div.querySelector('span[data-id*="21"]');
    if (span) {
      // Get the <i> element with the class "char" and its "value" attribute
      const charElement = span.querySelector('i.char');
      if (charElement && charElement.getAttribute('value')) {
        urlCharacters.push(charElement.getAttribute('value'));
      }
    }
  }
});

// Join collected characters to form the URL
const url = urlCharacters.join('');
console.log("Extracted URL:", url);