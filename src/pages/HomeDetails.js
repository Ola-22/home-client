import SearchPages from "../Components/SearchPages";
import Card from "../Components/Card";
import { useContext, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function HomeDetails() {
  const value = useContext(DataContext);
  const [services] = value.services;

  const [searchService, setSearchService] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = services.HomeServices.filter((val) => {
      return val.ServiceOne.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchService(newFilter);
  };

  return (
    <div>
      <SearchPages imgSrc="/images/Home.png" onChange={handleFilter} />
      <h5 className="title-pages" style={{ alignSelf: "flex-start" }}>
        Home services
      </h5>
      {searchService.length !== 0 && (
        <>
          {searchService.map((service) => (
            <div className="App" key={service._id}>
              <Link to={`/home/${service._id}/${service._id}`}>
                <Card
                  imgService={service.imgService}
                  title={service.ServiceOne}
                  ratings
                  rating={service.Rating}
                  address={service.address}
                  imgLocation="/images/Location.png"
                  price={service.price}
                />
              </Link>
            </div>
          ))}
        </>
      )}
      {searchService.length === 0 && (
        <>
          {services.HomeServices.map((service) => (
            <div className="App" key={service._id}>
              <Link to={`/home/${service._id}/${service._id}`}>
                <Card
                  imgService={service.imgService}
                  title={service.ServiceOne}
                  ratings
                  rating={service.Rating}
                  address={service.address}
                  imgLocation="/images/Location.png"
                  price={service.price}
                />
              </Link>
            </div>
          ))}
        </>
      )}
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
