interface Props {}

const About = (props: Props) => {
  return (
    <div className="section-share section-about">
      <div className="section-container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fs-4 py-2">Truyền thông nói về Hỏi Dân IT</h1>
        </div>
        <div className="section-body">
          <div className="d-flex gap-4">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/wvTDYEWcbM8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <p style={{ flex: 1, fontStyle: "italic" }}>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem adipisci facilis, veritatis obcaecati in quae sint
              inventore asperiores quam beatae quisquam incidunt ea! Eius,
              voluptate ipsam. Atque id corrupti ut! ..."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
