import SearchPages from "../Components/SearchPages";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import "./style.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function ServiceCleaning() {
  const value = useContext(DataContext);
  const [services] = value.services;

  const { id } = useParams();

  const Details = services.HomeServices[0].serviceClean.filter(
    (service, index) => {
      return service._id === id;
    }
  );
  return (
    <div>
      <SearchPages imgSrc="/images/Home.png" />
      {Details.map((service) => (
        <div key={service._id}>
          <Link to={`/home/${service._id}/${service._id}/${service._id}`}>
            <div className="card-pages">
              <Card
                // 189
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
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
