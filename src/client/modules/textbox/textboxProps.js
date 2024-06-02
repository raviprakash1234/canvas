const TextboxProps = ({
  textBoxProps = {},
  handleChange = () => {},
  handleDecreaseFontSize = () => {},
  handleIncreaseFontSize = () => {},
  handleDecreaseCharSpace = () => {},
  handleIncreaseCharSpace = () => {},
  zoomIn = () => {},
  ZoomOut = () => {},
}) => {
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Properties</h2>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textBoxProps.underline}
          name="underline"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          type="checkbox"
          checked={textBoxProps.underline}
        />
        <label>Underlined</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textBoxProps.italic}
          name="italic"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          type="checkbox"
          checked={textBoxProps.italic}
        />
        <label>Italic</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textBoxProps.overline}
          name="overline"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          type="checkbox"
          checked={textBoxProps.overline}
        />
        <label>Overline</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textBoxProps.bold}
          name="bold"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          type="checkbox"
          checked={textBoxProps.bold}
        />
        <label>Bold</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textBoxProps.linethrough}
          name="linethrough"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          type="checkbox"
          checked={textBoxProps.linethrough}
        />
        <label>Line through</label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          value={textBoxProps.lockRotation}
          type="checkbox"
          name="lockRotation"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          checked={textBoxProps.lockRotation}
        />
        <label>Lock Rotation</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={textBoxProps.lockMovementX}
          name="lockMovementX"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          checked={textBoxProps.lockMovementX}
        />
        <label>Lock Movement X</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="checkbox"
          value={textBoxProps.lockMovementY}
          name="lockMovementY"
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          checked={textBoxProps.lockMovementY}
        />
        <label>Lock Movement Y</label>
      </div>
      <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
        <button onClick={() => handleDecreaseFontSize()}>-</button>
        <input
          style={{ width: "32px" }}
          value={textBoxProps.fontSize}
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          type="text"
          name="fontSize"
          checked={textBoxProps.fontSize}
        />
        <button onClick={() => handleIncreaseFontSize()}>+</button>
        <label>Font Size</label>
      </div>
      <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
        <button onClick={() => handleDecreaseCharSpace()}>-</button>
        <input
          style={{ width: "32px" }}
          value={textBoxProps.charSpacing}
          onChange={(evt) => handleChange(evt, "textBoxProps", "checkbox")}
          type="text"
          name="charSpacing"
          checked={textBoxProps.charSpacing}
        />
        <button onClick={() => handleIncreaseCharSpace()}>+</button>
        <label>Character Space</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={textBoxProps.fill}
          name="fill"
          onChange={(evt) => handleChange(evt, "textBoxProps")}
        />
        <label>Text Color</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={textBoxProps.textBackgroundColor}
          name="textBackgroundColor"
          onChange={(evt) => handleChange(evt, "textBoxProps")}
        />
        <label>Background</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <input
          style={{ marginRight: "12px" }}
          type="color"
          value={textBoxProps.borderColor}
          name="borderColor"
          onChange={(evt) => handleChange(evt, "textBoxProps")}
        />
        <label>Border color</label>
      </div>
      <div style={{ marginTop: "12px" }}>
        <select
          onChange={(evt) => handleChange(evt, "textBoxProps")}
          style={{ marginRight: "12px" }}
          name="textAlign"
          value={textBoxProps.textAlign}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="center">Center</option>
        </select>
        <label>Text Align</label>
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
export default TextboxProps;
