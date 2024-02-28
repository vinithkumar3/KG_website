import Home from "./home/Home";
import Header from "./header/Header"
import Gallery from "./gallery/Gallery";
import Training from "./Training/Training";
import ReviewLink from "./review/Review";
import Contactus from "./contactus/Contactus";
import Footer from "./footer/Footer";

<Header />;
function Pageview() {
  return (
    <div class="backgd">
      <div>
        <Header/>
        <Home />
        <Gallery />
        <Training />
        <ReviewLink />
        <Contactus />
        <Footer />
      </div>
    </div>
  );
}

export default Pageview;
