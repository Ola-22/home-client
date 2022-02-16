import Footer from "../Components/Footer";
import Search from "../Components/Search";
// import ServiceProduct from "../Components/ServiceProduct";
import { useContext, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";
import Group from "../Components/Group";

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
      <img src="/images/banner.png" alt="" style={{ marginLeft: "16px" }} />
      {searchService.length !== 0 && (
        <div className="service-product">
          <div
            className="Group-container"
            style={{ marginTop: "2em", justifyContent: "flex-start" }}
          >
            <>
              {searchService.map((service) => (
                <div style={{ marginLeft: "20px" }} key={service._id}>
                  <Link to={`/home/${service._id}`}>
                    <Group src={service.img} title={service.title} />
                  </Link>
                </div>
              ))}
            </>
          </div>
        </div>
      )}
      <div>
        <div className="service-product">
          {searchService.length == 0 && (
            <>
              <div className="title-section">
                <div style={{ display: "flex" }}>
                  <img src="/images/MaskGroup1.png" alt="" />
                  <h5>Qatar 2022</h5>
                </div>
                <a href="/">View all</a>
              </div>
              <div className="Group-container">
                {services.NewServices.map((service) => (
                  <Group
                    key={service._id}
                    src={service.img}
                    title={service.title}
                  />
                ))}
              </div>

              <div className="title-section">
                <div style={{ display: "flex" }}>
                  <h5>Personal services</h5>
                </div>
                <a href="/">View all</a>
              </div>
              <div className="Group-container">
                {services.personalServices.map((service) => (
                  <Group
                    key={service._id}
                    src={service.img}
                    title={service.title}
                  />
                ))}
              </div>

              <div className="title-section">
                <div style={{ display: "flex" }}>
                  <h5>Home services</h5>
                </div>
                <a href="/home">View all</a>
              </div>
              <div className="Group-container">
                {services.HomeServices.map((service) => (
                  <Group
                    key={service._id}
                    src={service.img}
                    title={service.title}
                  />
                ))}
              </div>

              <div className="title-section">
                <div style={{ display: "flex" }}>
                  <h5>Car services</h5>
                </div>
                <a href="/">View all</a>
              </div>
              <div className="Group-container">
                {services.CarServices.map((service) => (
                  <Group
                    key={service._id}
                    src={service.img}
                    title={service.title}
                  />
                ))}
              </div>

              <div className="title-section">
                <div style={{ display: "flex" }}>
                  <h5>Restaurant services</h5>
                </div>
                <a href="/">View all</a>
              </div>
              <div className="Group-container">
                {services.RestServices.map((service) => (
                  <Group
                    key={service._id}
                    src={service.img}
                    title={service.title}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
