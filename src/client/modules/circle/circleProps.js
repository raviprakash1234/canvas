const CircleProp = ({
  circleProps = {},
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
          value={circleProps.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "circleProps", "checkbox")}
          checked={circleProps.lockRotation}
        />
        <label>Lock Rotation</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={circleProps.lockMovementX}
          type="checkbox"
          name="lockMovementX"
          onChange={(evt) => handleChange(evt, "circleProps", "checkbox")}
          checked={circleProps.lockMovementX}
        />
        <label>Lock Movement X</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={circleProps.lockMovementY}
          type="checkbox"
          name="lockMovementY"
          onChange={(evt) => handleChange(evt, "circleProps", "checkbox")}
          checked={circleProps.lockMovementY}
        />
        <label>Lock Movement Y</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={circleProps.fill}
          name="fill"
          onChange={(evt) => handleChange(evt, "circleProps")}
        />
        <label>Fill</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={circleProps.backgroundColor}
          name="backgroundColor"
          onChange={(evt) => handleChange(evt, "circleProps")}
        />
        <label>Background</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={circleProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "circleProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={circleProps.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt, "circleProps")}
        />
        <label>Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={circleProps.shadowColor}
          name="shadowColor"
          onChange={(evt) => handleChange(evt, "circleProps")}
        />
        <label>Shadow Color</label>
      </div>
      <>
        <div style={{ marginTop: "12px" }}>
          <input
            style={{ marginRight: "12px" }}
            type="range"
            value={circleProps.radius}
            name="radius"
            onChange={(evt) => handleChange(evt, "circleProps")}
          />
          <label>Radius</label>
        </div>
      </>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={circleProps.opacity}
          name="opacity"
          onChange={(evt) => handleChange(evt, "circleProps")}
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

export default CircleProp;
