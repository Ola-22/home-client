import SearchPages from "../Components/SearchPages";
import { useContext, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import "./style.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function ServiceCleaning() {
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

  const { id } = useParams();

  const Details = services.HomeServices[0].serviceClean.filter(
    (service, index) => {
      return service._id === id;
    }
  );
  return (
    <div className="service-cleaning">
      <SearchPages imgSrc="/images/Home.png" onChange={handleFilter} />
      <div className="services">
        {searchService.length !== 0 && (
          <div className="service-product">
            <div
              className="Group-container"
              style={{ marginTop: "2em", justifyContent: "flex-start" }}
            >
              <>
                {searchService.map((service) => (
                  <div>
                    <Link to={`/home/${service._id}/${service._id}`}>
                      <Card
                        imgService={service.img}
                        title={service.title}
                        ratings
                        rating={service.Rating}
                        paragraph={service.paragraph}
                        price={service.price}
                        review={service.review}
                      />
                    </Link>
                  </div>
                ))}
              </>
            </div>
          </div>
        )}
        {searchService.length === 0 && (
          <>
            {Details.map((service) => (
              <div key={service._id}>
                <Link to={`/home/${service._id}/${service._id}/${service._id}`}>
                  <div className="card-pages" style={{ marginTop: "17px" }}>
                    <Card
                      imgService={service.img}
                      title={service.title}
                      ratings
                      rating={service.Rating}
                      paragraph={service.paragraph}
                      price={service.price}
                      review={service.review}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
        <div className="pick-time">
          <h6>Pick time & date:</h6>
          <div style={{ display: "flex" }}>
            <input value="DD/MM/" type="date" />
            <input type="time" />
          </div>

          <textarea name="w3review">Notes</textarea>
        </div>
        <Link to="/request">
          <button className="requestBtn">Request</button>
        </Link>
      </div>

      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
