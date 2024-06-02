import { setBackgroundImage } from "../../../utils";

const CanvasBackgroundImage = ({
  data = [],
  canvas = null,
  onClose = () => {},
}) => {
  const handleSetBackgroundImage = (img) => {
    setBackgroundImage(img, (img) => {
      //   img.set({
      //     width: 800,
      //     height: 600,
      //   });
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });
    onClose();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          overflowY: "scroll",
          cursor: "pointer",
        }}
      >
        {data.map((img) => (
          <img
            crossOrigin="anonymous"
            onClick={() => handleSetBackgroundImage(img.urls.regular)}
            width={150}
            height={150}
            src={img.urls.small}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default CanvasBackgroundImage;
