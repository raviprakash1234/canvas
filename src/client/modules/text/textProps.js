const TextProps = ({ textProps = {}, handleChange = () => {} }) => {
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Properties</h2>
      <>
        <div style={{ marginTop: "12px" }}>
          <input
            style={{ marginRight: "12px" }}
            value={textProps.underline}
            name="underline"
            onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
            type="checkbox"
          />
          <label>Underlined</label>
        </div>
        <div style={{ marginTop: "12px" }}>
          <input
            style={{ marginRight: "12px" }}
            value={textProps.overline}
            name="overline"
            onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
            type="checkbox"
          />
          <label>Overline</label>
        </div>
        <div style={{ marginTop: "12px" }}>
          <input
            style={{ marginRight: "12px" }}
            value={textProps.bold}
            name="bold"
            onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
            type="checkbox"
          />
          <label>Bold</label>
        </div>
        <div style={{ marginTop: "12px" }}>
          <input
            style={{ marginRight: "12px" }}
            value={textProps.linethrough}
            name="linethrough"
            onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
            type="checkbox"
          />
          <label>Line through</label>
        </div>
      </>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textProps.selectable}
          type="checkbox"
          name="selectable"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>Selectable</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textProps.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>Lock Rotation</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={textProps.lockMovementX}
          name="lockMovementX"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>Lock Movement X</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={textProps.lockMovementY}
          name="lockMovementY"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>Lock Movement Y</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textProps.flipX}
          name="flipX"
          type="checkbox"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>FlipX</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textProps.flipY}
          name="flipY"
          type="checkbox"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>FlipY</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={textProps.affectStroke}
          name="affectStroke"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>Affect Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={textProps.absolutePositioned}
          name="absolutePositioned"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>Absolute Positioned</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={textProps.dirty}
          name="dirty"
          onChange={(evt) => handleChange(evt, "textProps", "checkbox")}
        />
        <label>Dirty</label>
      </div>
    </>
  );
};
export default TextProps;
