import HandbookImg from "assets/bs-than-kinh-gioi-hcm.png";
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

export const HandBook = ({ settings }: Props) => {
  return (
    <div className="section-share section-handbook">
      <div className="section-container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fs-4 py-2">Cẩm nang</h1>
          <button className="section-btn">Tất cả bài viết</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="img-customize img-handbook">
              <img src={HandbookImg} alt="" />
              <p className="">
                Thạc sĩ Bác sĩ Nguyễn Văn A
                <br />
                Sức khỏe và tinh thần
              </p>
            </div>
            <div className="img-customize img-handbook">
              <img src={HandbookImg} alt="" />
              <p className="">
                Thạc sĩ Bác sĩ Nguyễn Văn B
                <br />
                <span>Sức khỏe và tinh thần</span>
              </p>
            </div>
            <div className="img-customize img-handbook">
              <img src={HandbookImg} alt="" />
              <p className="">
                Thạc sĩ Bác sĩ Nguyễn Văn C
                <br />
                <span>Sức khỏe và tinh thần</span>
              </p>
            </div>
            <div className="img-customize img-handbook">
              <img src={HandbookImg} alt="" />
              <p className="">
                Thạc sĩ Bác sĩ Nguyễn Văn D
                <br />
                <span>Sức khỏe và tinh thần</span>
              </p>
            </div>
            <div className="img-customize img-handbook">
              <img src={HandbookImg} alt="" />
              <p className="">
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
