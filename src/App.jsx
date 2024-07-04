import "./App.css";
import Banner from "./components/BaiTapLayoutComponent/BaiTapThucHanhLayout/Banner";
import Footer from "./components/BaiTapLayoutComponent/BaiTapThucHanhLayout/Footer";
import Header from "./components/BaiTapLayoutComponent/BaiTapThucHanhLayout/Header";
import Item from "./components/BaiTapLayoutComponent/BaiTapThucHanhLayout/Item";

function App() {
  return (
    <>
      <div>
        <Header />
        <section>
          <Banner />
          <Item />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
