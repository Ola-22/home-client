import { useContext } from "react";
import Group from "../Components/Group";
import { DataContext } from "../Context/DataProvider";

export default function HomeServices() {
  const value = useContext(DataContext);
  const [services] = value.services;

  return (
    <div>
      <div className="Group-container">
        {services.HomeServices.map((service) => (
          <Group key={service._id} src={service.img} title={service.title} />
        ))}
      </div>
    </div>
  );
}
