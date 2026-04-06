import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CowSection from "./components/CowSection";
import ProductFeatures from "./components/ProductFeatures";
import CowFilter from "./pages/CowFilter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CssBaseline />
              <Navbar />
              <Hero />
              <CowSection />
              <ProductFeatures />
            </>
          }
        />
        <Route path="/cow-filter" element={<CowFilter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
