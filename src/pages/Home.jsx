import HeroSlider from "../components/Heroslider";
import hero1 from "../assets/banner-1.jpg"
import hero2 from "../assets/banner-2.jpg"
import hero3 from "../assets/banner-3.jpg"

const Home =  function () {
    const images = [hero1, hero2, hero3];
  return (
   
      <div className="m-0 p-0">
      <HeroSlider images={images} />
    </div>

  
  );
}

export default Home
