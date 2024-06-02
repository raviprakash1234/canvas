import { useEffect } from "react";
import Canvas from "../shared/components/canvas";
const TextBox = ({
  canvas = null,
  textBoxProps = {},
  handleGroupCanvas = () => {},
  activeObject = () => {},
}) => {
  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        underline: objectProps.underline,
        fontSize: objectProps.fontSize,
        fontWeight: objectProps.bold ? "bold" : "normal",
        overline: objectProps.overline,
        linethrough: objectProps.linethrough,
        textBackgroundColor: objectProps.textBackgroundColor,
        lockRotation: objectProps.lockRotation,
        lockMovementX: objectProps.lockMovementX,
        lockMovementY: objectProps.lockMovementY,
        fill: objectProps.fill,
        borderColor: objectProps.borderColor,
        charSpacing: objectProps.charSpacing,
        textAlign: objectProps.textAlign,
        fontStyle: objectProps.italic ? "italic" : "normal",
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(textBoxProps);
  }, [textBoxProps]);

  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="Textbox"
          props={{
            width: 600,
            fontSize: 32,
            fill: "black",
            editable: true,
            textAlign: "center",
          }}
          activeObject={activeObject}
          handleGroupCanvas={handleGroupCanvas}
          firstArgument="Add your Text..."
          isAnimate={false}
        />
      </div>
    </>
  );
};

export default TextBox;
