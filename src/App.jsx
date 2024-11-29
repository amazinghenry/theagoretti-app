import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import TheaFaq from "./components/theafaq/FAQ";
import GalleryImages from "./components/theagallery/galleryImages";
import TheaMission from "./components/theamission/TheaMission";
import TheaServices from "./components/theaservices/TheaServices";
import TheaVision from "./components/theavision/TheaVision";
import TheaJoinUs from "./components/theajoinus/TheaJoinUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <TheaVision />
      <TheaMission />
      <TheaServices />
      <GalleryImages />
      <TheaFaq />
      <TheaJoinUs />
      <Footer />
    </>
  );
}

export default App;
