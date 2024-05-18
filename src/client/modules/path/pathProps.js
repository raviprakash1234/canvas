const PathProps = ({
  pathProps = {},
  handleChange = () => {},
  zoomIn = () => {},
  ZoomOut = () => {},
}) => {
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Properties</h2>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={pathProps.fill}
          name="fill"
          onChange={(evt) => handleChange(evt, "pathProps")}
        />
        <label>Fill</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={pathProps.backgroundColor}
          name="backgroundColor"
          onChange={(evt) => handleChange(evt, "pathProps")}
        />
        <label>Background</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={pathProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "pathProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={pathProps.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt, "pathProps")}
        />
        <label>Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={pathProps.shadowColor}
          name="shadowColor"
          onChange={(evt) => handleChange(evt, "pathProps")}
        />
        <label>Shadow Color</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={pathProps.opacity}
          name="opacity"
          onChange={(evt) => handleChange(evt, "pathProps")}
        />
        <label>Opacity</label>
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

export default PathProps;
