import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import Group from "../Group";
import "./style.css";
import Search from "../Search";

export default function ServiceProduct() {
  const value = useContext(DataContext);
  const [services] = value.services;
  console.log(services.NewServices);

  const [searchService, setSearchService] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = services.HomeServices.filter((val) => {
      return val.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchService(newFilter);
  };

  return (
    <div className="service-product">
      {searchService.length === 0 && (
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
  );
}
