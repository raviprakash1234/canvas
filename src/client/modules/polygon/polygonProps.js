const PolygonProps = ({
  polygonProps = {},
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
          value={polygonProps.selectable}
          type="checkbox"
          name="selectable"
          onChange={(evt) => handleChange(evt, "polygonProps", "checkbox")}
          checked={polygonProps.selectable}
        />
        <label>Selectable</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={polygonProps.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "polygonProps", "checkbox")}
          checked={polygonProps.lockRotation}
        />
        <label>Lock Rotation</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={polygonProps.fill}
          name="fill"
          onChange={(evt) => handleChange(evt, "polygonProps")}
        />
        <label>Fill</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={polygonProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "polygonProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={polygonProps.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt, "polygonProps")}
        />
        <label>Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={polygonProps.shadowColor}
          name="shadowColor"
          onChange={(evt) => handleChange(evt, "polygonProps")}
        />
        <label>Shadow Color</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={polygonProps.opacity}
          name="opacity"
          onChange={(evt) => handleChange(evt, "polygonProps")}
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

export default PolygonProps;
