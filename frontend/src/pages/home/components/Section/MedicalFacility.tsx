import Slider from "react-slick";
import MedicalFacilityImg from "assets/pk-dhyd1.jpg";
interface Props {
  settings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    nextArrow: JSX.Element;
    prevArrow: JSX.Element;
  };
}

const MedicalFacility = ({ settings }: Props) => {
  return (
    <div className="section-share section-medical-facility">
      <div className="section-container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fs-4 py-2">Cơ sở y tế nổi bật</h1>
          <button className="section-btn">Tìm kiếm</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="img-customize">
              <img src={MedicalFacilityImg} alt="" />
              <p className="fs-6 my-2">Phòng khám đại học y dược 1</p>
            </div>
            <div className="img-customize">
              <img src={MedicalFacilityImg} alt="" />
              <p className="fs-6 my-2">Phòng khám đại học y dược 1</p>
            </div>
            <div className="img-customize">
              <img src={MedicalFacilityImg} alt="" />
              <p className="fs-6 my-2">Phòng khám đại học y dược 1</p>
            </div>
            <div className="img-customize">
              <img src={MedicalFacilityImg} alt="" />
              <p className="fs-6 my-2">Phòng khám đại học y dược 1</p>
            </div>
            <div className="img-customize">
              <img src={MedicalFacilityImg} alt="" />
              <p className="fs-6 my-2">Phòng khám đại học y dược 1</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MedicalFacility;
