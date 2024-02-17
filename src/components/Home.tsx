import Header from "./Header";
import Contact from "./contact/Contact";
import Events from "./event/Events";
import Gallery from "./gallery/Gallery";
import Package from "./package/Package";
import RecentBlog from "./recentBlog/RecentBlog";
import RecentEvent from "./recentEvent/RecentEvent";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Events />
      <Gallery />
      <Package />
      <Testimonial />
      <RecentEvent />
      <Contact />
      <RecentBlog />
    </div>
  );
};

export default Home;
