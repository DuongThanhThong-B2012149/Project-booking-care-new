import MusculosskeletalImg from "assets/musculoskeletal.jpg";
import Slider from "react-slick";
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

export const Specialty = ({ settings }: Props) => {
  return (
    <div className="section-share section-specialty">
      <div className="section-container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fs-4 py-2">Chuyên khoa phổ biến</h1>
          <button className="section-btn">Xem thêm</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="img-customize">
              <img src={MusculosskeletalImg} alt="" />
              <p className="fs-6 my-2">Cơ xương khớp</p>
            </div>
            <div className="img-customize">
              <img src={MusculosskeletalImg} alt="" />
              <p className="fs-6 my-2">Cơ xương khớp</p>
            </div>
            <div className="img-customize">
              <img src={MusculosskeletalImg} alt="" />
              <p className="fs-6 my-2">Cơ xương khớp</p>
            </div>
            <div className="img-customize">
              <img src={MusculosskeletalImg} alt="" />
              <p className="fs-6 my-2">Cơ xương khớp</p>
            </div>
            <div className="img-customize">
              <img src={MusculosskeletalImg} alt="" />
              <p className="fs-6 my-2">Cơ xương khớp</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
