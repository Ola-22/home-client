import SearchPages from "../Components/SearchPages";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function HomeDetails() {
  const value = useContext(DataContext);
  const [services] = value.services;

  const { id } = useParams();

  const Details = services.HomeServices.filter((service, index) => {
    return service._id === id;
  });

  return (
    <div>
      <SearchPages imgSrc="/images/Home.png" />
      {Details.map((service) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h5 className="title-pages" style={{ alignSelf: "flex-start" }}>
            Home services
          </h5>

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

          <Card
            imgService={service.imgService}
            title={service.ServiceOne}
            ratings
            rating={service.Rating}
            address={service.address}
            imgLocation="/images/Location.png"
            price={service.price}
          />
          <Card
            imgService={service.imgService}
            title={service.ServiceOne}
            ratings
            rating={service.Rating}
            address={service.address}
            imgLocation="/images/Location.png"
            price={service.price}
          />
          <Card
            imgService={service.imgService}
            title={service.ServiceOne}
            ratings
            rating={service.Rating}
            address={service.address}
            imgLocation="/images/Location.png"
            price={service.price}
          />
          <Card
            imgService={service.imgService}
            title={service.ServiceOne}
            ratings
            rating={service.Rating}
            address={service.address}
            imgLocation="/images/Location.png"
            price={service.price}
          />
        </div>
      ))}
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
