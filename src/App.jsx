import "./styles.css";
import React from "react";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import Nav from "./Nav";
import { useTheme } from "./theme-context";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black"
      }}
    >
      <h1 className="app-header" style={{ color: theme ? "white" : "black" }}>
        eCommerce
      </h1>
      <div className="app-body" style={{ color: theme ? "white" : "black" }}>
        <Nav />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
