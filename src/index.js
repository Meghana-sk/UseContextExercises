import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { LocalisationProvider } from "./localisation-context";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <LocalisationProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LocalisationProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
