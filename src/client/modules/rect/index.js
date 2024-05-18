import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Rect = ({
  canvas = null,
  rectProps = {},
  activeObject = () => {},
  handleGroupCanvas = () => {},
}) => {
  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        lockRotation: objectProps.lockRotation,
        dirty: objectProps.dirty,
        fill: objectProps.fill || "gray",
        borderColor: objectProps.borderColor,
        strokeColor: objectProps.strokeColor,
        backgroundColor: objectProps.backgroundColor,
        angle: Number(objectProps.angle),
        left: Number(objectProps.left),
        top: Number(objectProps.top),
        skewX: Number(objectProps.skewX),
        skewY: Number(objectProps.skewY),
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(rectProps);
  }, [rectProps]);
  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="Rect"
          props={{
            left: Math.random() * 400,
            top: Math.random() * 200,
            width: 200,
            height: 100,
            opacity: 0.5,
          }}
          activeObject={activeObject}
          handleGroupCanvas={handleGroupCanvas}
        />
      </div>
    </>
  );
};

export default Rect;
