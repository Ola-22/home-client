import Footer from "../Components/Footer";
import Search from "../Components/Search";
import ServiceProduct from "../Components/ServiceProduct";

function HomePage() {
  return (
    <div className="App">
      <Search />
      <img src="/images/banner.png" alt="" style={{ marginLeft: "16px" }} />
      <div>
        <ServiceProduct />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
