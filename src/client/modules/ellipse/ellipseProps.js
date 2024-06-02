const EllipseProps = ({
  ellipseProps = {},
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
          value={ellipseProps.selectable}
          type="checkbox"
          name="selectable"
          onChange={(evt) => handleChange(evt, "ellipseProps", "checkbox")}
          checked={ellipseProps.selectable}
        />
        <label>Selectable</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={ellipseProps.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "ellipseProps", "checkbox")}
          checked={ellipseProps.lockRotation}
        />
        <label>Lock Rotation</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={ellipseProps.flipX}
          name="flipX"
          type="checkbox"
          onChange={(evt) => handleChange(evt, "ellipseProps", "checkbox")}
          checked={ellipseProps.lockRotation}
        />
        <label>FlipX</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={ellipseProps.flipY}
          name="flipY"
          type="checkbox"
          onChange={(evt) => handleChange(evt, "ellipseProps", "checkbox")}
          checked={ellipseProps.flipY}
        />
        <label>FlipY</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={ellipseProps.affectStroke}
          name="affectStroke"
          onChange={(evt) => handleChange(evt, "ellipseProps", "checkbox")}
          checked={ellipseProps.affectStroke}
        />
        <label>Affect Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={ellipseProps.absolutePositioned}
          name="absolutePositioned"
          onChange={(evt) => handleChange(evt, "ellipseProps", "checkbox")}
          checked={ellipseProps.absolutePositioned}
        />
        <label>Absolute Positioned</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={ellipseProps.dirty}
          name="dirty"
          onChange={(evt) => handleChange(evt, "ellipseProps", "checkbox")}
          checked={ellipseProps.dirty}
        />
        <label>Dirty</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={ellipseProps.fill}
          name="fill"
          onChange={(evt) => handleChange(evt, "ellipseProps")}
        />
        <label>Fill</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={ellipseProps.backgroundColor}
          name="backgroundColor"
          onChange={(evt) => handleChange(evt, "ellipseProps")}
        />
        <label>Background</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={ellipseProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "ellipseProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={ellipseProps.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt, "ellipseProps")}
        />
        <label>Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={ellipseProps.shadowColor}
          name="shadowColor"
          onChange={(evt) => handleChange(evt, "ellipseProps")}
        />
        <label>Shadow Color</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={ellipseProps.opacity}
          name="opacity"
          onChange={(evt) => handleChange(evt, "ellipseProps")}
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

export default EllipseProps;
