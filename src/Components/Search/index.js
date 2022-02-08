import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import "./style.css";

export default function Search() {
  const [searchService, setSearchService] = useState([]);
  const value = useContext(DataContext);
  const [services] = value.services;

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = services.NewServices.filter((val) => {
      return val.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchService(newFilter);
  };

  return (
    <div className="search">
      <img src="/images/Filter.png" alt="" />
      <input
        onChange={handleFilter}
        type="text"
        placeholder="Search for a service"
      />
      {searchService.length != 0 &&
        searchService.map((service) => (
          <h2 key={service.id}>{service.title}</h2>
        ))}

      <img src="/images/Voice.png" alt="" />
    </div>
  );
}
