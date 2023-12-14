import Home from "./home/Home";
<<<<<<< HEAD
import Header from "./header/Header"
import Gallery from "./gallery/Gallery";
import Training from "./Training/Training";
import ReviewLink from "./review/Review";
import Contactus from "./contactus/Contactus";
import Footer from "./footer/Footer";

=======
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import Gallery from "./gallery/Gallery";
import Training from "./Training/Training";
import ReviewLink from "./review/Review";
import Contactus from "./contactus/Contactus";
import Footer from "./footer/Footer";
import Login from "./login/Login";
>>>>>>> c2535c3d8f0fea617ba3724471d71770303bb050

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
