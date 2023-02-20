import { GrNext } from "react-icons/gr";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow-customize`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <GrNext
        className="arrow-icon"
        style={{ width: "100%", stroke: "#959595", height: "100%" }}
      />
    </div>
  );
};

export default NextArrow;
