const RectProps = ({
  rectProps = {},
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
          value={rectProps.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "rectProps", "checkbox")}
        />
        <label>Lock Rotation</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={rectProps.dirty}
          name="dirty"
          onChange={(evt) => handleChange(evt, "rectProps", "checkbox")}
        />
        <label>Dirty</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={rectProps.angle}
          min="0"
          max="500"
          name="angle"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Angle</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={rectProps.left}
          min="0"
          max="500"
          name="left"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Left</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={rectProps.top}
          name="top"
          min="0"
          max="500"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Top</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={rectProps.skewX}
          name="skewX"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Skew X</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={rectProps.skewY}
          name="skewY"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Skew Y</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={rectProps.fill}
          name="fill"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Fill</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={rectProps.backgroundColor}
          name="backgroundColor"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Background</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={rectProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={rectProps.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt, "rectProps")}
        />
        <label>Stroke</label>
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

export default RectProps;
