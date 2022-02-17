import Footer from "../Components/Footer";
import Search from "../Components/Search";
import ServiceProduct from "../Components/ServiceProduct";
import { useContext, useState } from "react";
import { DataContext } from "../Context/DataProvider";

function HomePage({ onChange }) {
  const value = useContext(DataContext);
  const [services] = value.services;

  const [searchService, setSearchService] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = services.CarServices.filter((val) => {
      return val.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchService(newFilter);
  };
  return (
    <div className="App">
      <Search onChange={handleFilter} />

      <img src="/images/banner.png" alt="" />
      <ServiceProduct />

      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
