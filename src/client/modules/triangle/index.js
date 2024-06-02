import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Triangle = ({
  canvas = null,
  handleGroupCanvas = () => {},
  activeObject = () => {},
  triangleProps = {},
}) => {
  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        lockRotation: objectProps.lockRotation,
        dirty: objectProps.dirty,
        fill: objectProps.fill,
        borderColor: objectProps.borderColor,
        strokeColor: objectProps.strokeColor,
        shadowColor: objectProps.shadowColor,
        backgroundColor: objectProps.backgroundColor,
        lockMovementY: objectProps.lockMovementY,
        lockMovementX: objectProps.lockMovementX,
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(triangleProps);
  }, [triangleProps]);

  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="Triangle"
          props={{
            fill: "teal",
            opacity: 0.5,
          }}
          activeObject={activeObject}
          handleGroupCanvas={handleGroupCanvas}
          isAnimate={false}
        />
      </div>
    </>
  );
};

export default Triangle;
