import "./App.css";
import DataProvider from "./Context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeServices from "./pages/HomeServices";
import HomePage from "./pages/HomePage";
import HomeDetails from "./pages/HomeDetails";
import Services from "./pages/Services";
import ServiceCleaning from "./pages/ServiceCleaning";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomeServices />} />
            <Route path="/home/:id" element={<HomeDetails />} />
            <Route path="/home/:id/:id" element={<Services />} />
            <Route path="/home/:id/:id/:id" element={<ServiceCleaning />} />

            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
