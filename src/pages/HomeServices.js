import { useContext } from "react";
import Group from "../Components/Group";
import SearchPages from "../Components/SearchPages";
import { DataContext } from "../Context/DataProvider";

export default function HomeServices() {
  const value = useContext(DataContext);
  const [services] = value.services;

  return (
    <div>
      <SearchPages />
      <h5 className="title-pages">Home services</h5>
      <div className="service-product">
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
    </div>
  );
}
