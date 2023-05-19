import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { Navbar } from "./components/layouts/navbar";
import { AuthProvider } from "react-auth-kit";
import { AuthPage } from "./pages/auth";

function App() {
    const [count, setCount] = useState(0);

    return (
        <AuthProvider>
            <HelmetProvider>
                <ChakraProvider>
                    <Navbar />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/auth" element={<AuthPage />} />
                        </Routes>
                    </BrowserRouter>
                </ChakraProvider>
            </HelmetProvider>
        </AuthProvider>
    );
}

export default App;
