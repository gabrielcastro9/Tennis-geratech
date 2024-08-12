import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./src/components/Header.tsx";
import Footer from "./src/components/Footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./src/context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <body className="flex flex-col min-h-screen">
          <Header />
          <App />
          <Footer />
        </body>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
