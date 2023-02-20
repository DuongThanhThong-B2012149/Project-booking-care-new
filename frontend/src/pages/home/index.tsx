import About from "./components/Section/About";
import { HandBook } from "./components/Section/HandBook";
import MedicalFacility from "./components/Section/MedicalFacility";
import NextArrow from "./components/Section/NextArrow";
import { OutstandingDoctor } from "./components/Section/OutstandingDoctor";
import PrevArrow from "./components/Section/PrevArrow";
import { Specialty } from "./components/Section/Specialty";

const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Specialty settings={settings} />
      <MedicalFacility settings={settings} />
      <OutstandingDoctor settings={settings} />
      <HandBook
        settings={{
          ...settings,
          slidesToShow: 2,
          slidesToScroll: 2,
        }}
      />
      <About />
    </>
  );
};

export default HomePage;
