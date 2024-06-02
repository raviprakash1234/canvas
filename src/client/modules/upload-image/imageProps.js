const ImageProps = ({
  imageProps = {},
  handleChange = () => {},
  handleCropImage = () => {},
  zoomIn = () => {},
  ZoomOut = () => {},
}) => {
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Properties</h2>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={imageProps.absolutePositioned}
          name="absolutePositioned"
          onChange={(evt) => handleChange(evt, "imageProps", "checkbox")}
          checked={imageProps.absolutePositioned}
        />
        <label>Absolute Positioned</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={imageProps.dirty}
          name="dirty"
          onChange={(evt) => handleChange(evt, "imageProps", "checkbox")}
          checked={imageProps.dirty}
        />
        <label>Dirty</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={imageProps.brightness}
          name="brightness"
          onChange={(evt) => handleChange(evt, "imageProps")}
        />
        <label>Brightness</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={imageProps.blur}
          name="blur"
          onChange={(evt) => handleChange(evt, "imageProps")}
        />
        <label>Blur</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={imageProps.saturation}
          name="saturation"
          onChange={(evt) => handleChange(evt, "imageProps")}
        />
        <label>Saturation</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={imageProps.contrast}
          name="contrast"
          onChange={(evt) => handleChange(evt, "imageProps")}
        />
        <label>Contrast</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={imageProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "imageProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={imageProps.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt, "imageProps")}
        />
        <label>Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={imageProps.shadowColor}
          name="shadowColor"
          onChange={(evt) => handleChange(evt, "imageProps")}
        />
        <label>Shadow Color</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <button
          style={{ marginRight: "12px" }}
          onClick={() => handleCropImage()}
        >
          Crop Image
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginTop: "15px",
        }}
      >
        <button
          style={{
            padding: "5px 10px",
            fontSize: "12px",
            backgroundColor: "teal",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={zoomIn}
        >
          Zoom In
        </button>
        <button
          style={{
            padding: "5px 10px",
            fontSize: "12px",
            backgroundColor: "teal",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={ZoomOut}
        >
          Zoom Out
        </button>
      </div>
    </>
  );
};
export default ImageProps;
