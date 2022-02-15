import { useContext, useState } from "react";
import Group from "../Components/Group";
import SearchPages from "../Components/SearchPages";
import { DataContext } from "../Context/DataProvider";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function HomeServices() {
  const value = useContext(DataContext);
  const [services] = value.services;

  const [searchService, setSearchService] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = services.HomeServices.filter((val) => {
      return val.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchService(newFilter);
  };

  return (
    <div>
      <SearchPages imgSrc="/images/Home.png" onChange={handleFilter} />
      <h5 className="title-pages">Home services</h5>

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

      {searchService.length === 0 && (
        <div className="service-product">
          <div className="Group-container" style={{ marginTop: "2em" }}>
            <>
              {services.HomeServices.map((service) => (
                <Link to={`/home/${service._id}`} key={service._id}>
                  <Group
                    key={service._id}
                    src={service.img}
                    title={service.title}
                  />
                </Link>
              ))}
            </>
          </div>

          <div className="Group-container" style={{ marginTop: "2em" }}>
            <>
              {services.HomeServices.map((service) => (
                <Group
                  key={service._id}
                  src={service.img}
                  title={service.title}
                />
              ))}
            </>
          </div>

          <div className="Group-container" style={{ marginTop: "2em" }}>
            <>
              {services.HomeServices.map((service) => (
                <Group
                  key={service._id}
                  src={service.img}
                  title={service.title}
                />
              ))}
            </>
          </div>

          <div className="Group-container" style={{ marginTop: "2em" }}>
            <>
              {services.HomeServices.map((service) => (
                <Group
                  key={service._id}
                  src={service.img}
                  title={service.title}
                />
              ))}
            </>
          </div>
        </div>
      )}
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
