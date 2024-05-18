const Properties = ({
  properties = {},
  isActiveObject = null,
  handleChange = () => {},
  handleDecreaseFontSize = () => {},
  handleIncreaseFontSize = () => {},
  handleCropImage = () => {},
}) => {
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Properties</h2>
      {isActiveObject.type === "textbox" && (
        <>
          <div style={{ marginTop: "12px" }}>
            <input
              style={{ marginRight: "12px" }}
              value={properties.underline}
              name="underline"
              onChange={(evt) => handleChange(evt, "checkbox")}
              type="checkbox"
            />
            <label>Underlined</label>
          </div>
          <div style={{ marginTop: "12px" }}>
            <input
              style={{ marginRight: "12px" }}
              value={properties.overline}
              name="overline"
              onChange={(evt) => handleChange(evt, "checkbox")}
              type="checkbox"
            />
            <label>Overline</label>
          </div>
          <div style={{ marginTop: "12px" }}>
            <input
              style={{ marginRight: "12px" }}
              value={properties.bold}
              name="bold"
              onChange={(evt) => handleChange(evt, "checkbox")}
              type="checkbox"
            />
            <label>Bold</label>
          </div>
          <div style={{ marginTop: "12px" }}>
            <input
              style={{ marginRight: "12px" }}
              value={properties.linethrough}
              name="linethrough"
              onChange={(evt) => handleChange(evt, "checkbox")}
              type="checkbox"
            />
            <label>Line through</label>
          </div>
        </>
      )}
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={properties.selectable}
          type="checkbox"
          name="selectable"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>Selectable</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={properties.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>Lock Rotation</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={properties.lockMovementX}
          name="lockMovementX"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>Lock Movement X</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={properties.lockMovementY}
          name="lockMovementY"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>Lock Movement Y</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={properties.flipX}
          name="flipX"
          type="checkbox"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>FlipX</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={properties.flipY}
          name="flipY"
          type="checkbox"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>FlipY</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={properties.affectStroke}
          name="affectStroke"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>Affect Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={properties.absolutePositioned}
          name="absolutePositioned"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>Absolute Positioned</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={properties.dirty}
          name="dirty"
          onChange={(evt) => handleChange(evt, "checkbox")}
        />
        <label>Dirty</label>
      </div>
      {isActiveObject.type === "image" && (
        <>
          <div style={{ marginTop: "12px" }}>
            <input
              style={{ marginRight: "12px" }}
              type="checkbox"
              value={properties.bringForward}
              name="bringForward"
              onChange={(evt) => handleChange(evt, "checkbox")}
            />
            <label>Bring Forward</label>
          </div>
        </>
      )}
      {isActiveObject.type === "textbox" && (
        <>
          <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
            <button onClick={() => handleDecreaseFontSize()}>-</button>
            <input
              style={{ width: "32px" }}
              defaultValue={20}
              value={properties.fontSize}
              onChange={(evt) => handleChange(evt)}
              type="text"
              name="fontSize"
            />
            <button onClick={() => handleIncreaseFontSize()}>+</button>
            <label>Font Size</label>
          </div>
          <div style={{ marginTop: "12px" }}>
            <input
              style={{ marginRight: "12px" }}
              value={properties.textColor}
              name="textColor"
              onChange={(evt) => handleChange(evt)}
              type="color"
            />
            <label>Text Color</label>
          </div>
        </>
      )}
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={properties.fill}
          name="fill"
          onChange={(evt) => handleChange(evt)}
        />
        <label>Fill</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={properties.backgroundColor}
          name="backgroundColor"
          onChange={(evt) => handleChange(evt)}
        />
        <label>Background</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={properties.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt)}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={properties.strokeColor}
          name="strokeColor"
          onChange={(evt) => handleChange(evt)}
        />
        <label>Stroke</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={properties.shadowColor}
          name="shadowColor"
          onChange={(evt) => handleChange(evt)}
        />
        <label>Shadow Color</label>
      </div>
      {isActiveObject.type === "circle" && (
        <>
          <div style={{ marginTop: "12px" }}>
            <input
              style={{ marginRight: "12px" }}
              type="range"
              value={properties.radius}
              name="radius"
              onChange={(evt) => handleChange(evt)}
            />
            <label>Radius</label>
          </div>
        </>
      )}
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="range"
          value={properties.opacity}
          name="opacity"
          onChange={(evt) => handleChange(evt)}
        />
        <label>Opacity</label>
      </div>
      {isActiveObject.type === "image" && (
        <div style={{ marginTop: "12px" }}>
          <input
            style={{ marginRight: "12px" }}
            type="range"
            value={properties.brightness}
            name="brightness"
            onChange={(evt) => handleChange(evt)}
          />
          <label>Brightness</label>
        </div>
      )}
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="number"
          value={properties.blur}
          name="blur"
          onChange={(evt) => handleChange(evt)}
        />
        <label>Blur</label>
      </div>

      {isActiveObject.type === "image" && (
        <>
          <div style={{ marginTop: "12px" }}>
            <button
              style={{ marginRight: "12px" }}
              onClick={() => handleCropImage()}
            >
              Crop Image
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Properties;
