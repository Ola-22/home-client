import SearchPages from "../Components/SearchPages";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import "./style.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  const value = useContext(DataContext);
  const [services] = value.services;

  const { id } = useParams();

  const Details = services.HomeServices.filter((service, index) => {
    return service._id === id;
  });

  console.log(services.HomeServices[0].serviceClean);
  return (
    <div>
      <div className="search-content">
        <SearchPages imgSrc="/images/Home2.png" />
        {Details.map((service) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={service._id}
          >
            <Card
              imgService={service.imgService}
              title={service.ServiceOne}
              address={service.address}
              imgLocation="/images/Location2.png"
              paragraph={service.paragraph}
              rateImg="/images/star.png"
              rateVal={service.Rating}
              review={service.review}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h5 className="title-pages">Services</h5>
        <img style={{ marginTop: "1em" }} src="/images/Category.png" alt="" />
      </div>

      <div className="services">
        {services.HomeServices[0].serviceClean.map((service) => (
          <div key={service._id}>
            <Link to={`/home/${service._id}/${service._id}/${service._id}`}>
              <div className="card-pages">
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
      </div>
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
