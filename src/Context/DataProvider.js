import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [services, setServices] = useState({
    NewServices: [
      {
        _id: "1",
        title: "Tickets",
        img: "/images/NewService1.png",
      },
      {
        _id: "2",
        title: "Stadium Map",
        img: "/images/NewService2.png",
      },
      {
        _id: "3",
        title: "Match Schedule",
        img: "/images/NewService3.png",
      },
      {
        _id: "4",
        title: "Subway",
        img: "/images/NewService4.png",
      },
      {
        _id: "5",
        title: "Bus Stations",
        img: "/images/NewService5.png",
      },
    ],

    personalServices: [
      {
        _id: "1",
        title: "Yoga",
        img: "/images/personalService1.png",
      },
      {
        _id: "2",
        title: "Spa",
        img: "/images/personalService2.png",
      },
      {
        _id: "3",
        title: "Nurse",
        img: "/images/personalService3.png",
      },
      {
        _id: "4",
        title: "Women Hair dresser",
        img: "/images/personalService4.png",
      },
      {
        _id: "5",
        title: "Men Hair dresser",
        img: "/images/personalService5.png",
      },
    ],

    HomeServices: [
      {
        _id: "1",
        title: "Cleaning",
        img: "/images/HomeService1.png",
        ServiceOne: "Service Provider Name",
        Rating: 4,
        address: "Doha - Nakheel Street",
        imgService: "/images/cleaning1.png",
        paragraph:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        review: "(62 Review)",
        price: "180 QAR",
        serviceClean: [
          {
            _id: "1",
            title: "Basic plan cleaning",
            img: "/images/cleanService1.png",
            Rating: 4,
            paragraph:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
            review: "(62 Review)",
            price: "180 QAR",
          },
          {
            _id: "2",
            title: "Pro plan cleaning",
            img: "/images/cleanService2.png",
            Rating: 4,
            paragraph:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
            review: "(63 Review)",
            price: "300 QAR",
          },
          {
            _id: "3",
            title: "Super plan cleaning",
            img: "/images/cleanService3.png",
            Rating: 4,
            paragraph:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
            review: "(62 Review)",
            price: "499 QAR",
          },
        ],
      },
      {
        _id: "2",
        title: "Maid",
        img: "/images/HomeService2.png",
        ServiceOne: "Service Provider Name",
        Rating: 5,
        address: "Doha - Nakheel Street",
        imgService: "/images/cleaning2.png",
        paragraph:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        review: "(50 Review)",
        price: "180 QAR",
      },
      {
        _id: "3",
        title: "Babysitter",
        img: "/images/HomeService3.png",
        ServiceOne: "Service Provider Name",
        Rating: 5,
        address: "Doha - Nakheel Street",
        imgService: "/images/cleaning3.png",
        paragraph:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        review: "(42 Review)",
        price: "180 QAR",
      },
      {
        _id: "4",
        title: "Plumber",
        img: "/images/HomeService4.png",
        ServiceOne: "Service Provider Name",
        Rating: 4,
        address: "Doha - Nakheel Street",
        imgService: "/images/cleaning4.png",
        paragraph:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        review: "(62 Review)",
        price: "180 QAR",
      },
      {
        _id: "5",
        title: "Electrical",
        img: "/images/HomeService5.png",
        ServiceOne: "Service Provider Name",
        Rating: 3,
        address: "Doha - Nakheel Street",
        imgService: "/images/cleaning5.png",
        paragraph:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        review: "(22 Review)",
        price: "180 QAR",
      },
    ],

    CarServices: [
      {
        _id: "1",
        title: "Wash",
        img: "/images/carService1.png",
      },
      {
        _id: "2",
        title: "Order car",
        img: "/images/carService2.png",
      },
      {
        _id: "3",
        title: "Rent car",
        img: "/images/carService3.png",
      },
      {
        _id: "4",
        title: "Mechanic",
        img: "/images/carService4.png",
      },
      {
        _id: "5",
        title: "Electrical",
        img: "/images/carService5.png",
      },
    ],

    RestServices: [
      {
        _id: "1",
        title: "Order Meal",
        img: "/images/RestService1.png",
      },
      {
        _id: "2",
        title: "Sandwich",
        img: "/images/RestService2.png",
      },
      {
        _id: "3",
        title: "Order Drink",
        img: "/images/RestService3.png",
      },
      {
        _id: "4",
        title: "Shisha",
        img: "/images/RestService4.png",
      },
      {
        _id: "5",
        title: "Valet",
        img: "/images/RestService5.png",
      },
    ],
  });

  const value = {
    services: [services, setServices],
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
