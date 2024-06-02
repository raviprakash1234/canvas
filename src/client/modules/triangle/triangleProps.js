const TriangleProps = ({
  triangleProps = {},
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
          value={triangleProps.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "triangleProps", "checkbox")}
          checked={triangleProps.lockRotation}
        />
        <label>Lock Rotation</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={triangleProps.lockMovementX}
          type="checkbox"
          name="lockMovementX"
          onChange={(evt) => handleChange(evt, "triangleProps", "checkbox")}
          checked={triangleProps.lockMovementX}
        />
        <label>Lock Movement X</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={triangleProps.lockMovementY}
          type="checkbox"
          name="lockMovementY"
          onChange={(evt) => handleChange(evt, "triangleProps", "checkbox")}
          checked={triangleProps.lockMovementY}
        />
        <label>Lock Movement Y</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={triangleProps.dirty}
          name="dirty"
          onChange={(evt) => handleChange(evt, "triangleProps", "checkbox")}
          checked={triangleProps.dirty}
        />
        <label>Dirty</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={triangleProps.fill}
          name="fill"
          onChange={(evt) => handleChange(evt, "triangleProps")}
        />
        <label>Fill</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={triangleProps.backgroundColor}
          name="backgroundColor"
          onChange={(evt) => handleChange(evt, "triangleProps")}
        />
        <label>Background</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={triangleProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "triangleProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={triangleProps.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt, "triangleProps")}
        />
        <label>Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={triangleProps.shadowColor}
          name="shadowColor"
          onChange={(evt) => handleChange(evt, "triangleProps")}
        />
        <label>Shadow Color</label>
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
export default TriangleProps;
