import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
