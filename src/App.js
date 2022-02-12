import "./App.css";
// import Footer from "./Components/Footer";
// import Search from "./Components/Search";
// import ServiceProduct from "./Components/ServiceProduct";
import DataProvider from "./Context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeServices from "./pages/HomeServices";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          {/* <Search /> */}
          <Routes>
            <Route path="/home" element={<HomeServices />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
          {/* <img src="/images/banner.png" alt="" style={{ marginLeft: "16px" }} />
          <div>
            <ServiceProduct />
          </div>
          <Footer /> */}
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
