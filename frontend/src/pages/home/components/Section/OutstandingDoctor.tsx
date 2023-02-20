import AvtImg from "assets/avt.jpg";
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

export const OutstandingDoctor = ({ settings }: Props) => {
  return (
    <div className="section-share section-outstanding-doctor">
      <div className="section-container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fs-4 py-2">Bác sĩ nổi bật tuần qua</h1>
          <button className="section-btn">Tìm kiếm</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="img-customize img-avt">
              <img src={AvtImg} alt="" />
              <p className="fs-6 my-3">
                Thạc sĩ Bác sĩ Nguyễn Văn A
                <br />
                Sức khỏe và tinh thần
              </p>
            </div>
            <div className="img-customize img-avt">
              <img src={AvtImg} alt="" />
              <p className="fs-6 my-3">
                Thạc sĩ Bác sĩ Nguyễn Văn B
                <br />
                <span>Sức khỏe và tinh thần</span>
              </p>
            </div>
            <div className="img-customize img-avt">
              <img src={AvtImg} alt="" />
              <p className="fs-6 my-3">
                Thạc sĩ Bác sĩ Nguyễn Văn C
                <br />
                <span>Sức khỏe và tinh thần</span>
              </p>
            </div>
            <div className="img-customize img-avt">
              <img src={AvtImg} alt="" />
              <p className="fs-6 my-3">
                Thạc sĩ Bác sĩ Nguyễn Văn D
                <br />
                <span>Sức khỏe và tinh thần</span>
              </p>
            </div>
            <div className="img-customize img-avt">
              <img src={AvtImg} alt="" />
              <p className="fs-6 my-3">
                Thạc sĩ Bác sĩ Nguyễn Văn E
                <br />
                <span>Sức khỏe và tinh thần</span>
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
