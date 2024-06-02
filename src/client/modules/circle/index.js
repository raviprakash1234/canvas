import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Circle = ({
  canvas = null,
  circleProps = {},
  handleGroupCanvas = () => {},
  activeObject = () => {},
}) => {
  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        lockRotation: objectProps.lockRotation,
        fill: objectProps.fill,
        backgroundColor: objectProps.backgroundColor,
        borderColor: objectProps.borderColor,
        strokeColor: objectProps.strokeColor,
        shadowColor: objectProps.shadowColor,
        opacity: objectProps.opacity,
        radius: objectProps.radius,
        lockMovementX: objectProps.lockMovementX,
        lockMovementY: objectProps.lockMovementY,
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(circleProps);
  }, [circleProps]);
  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="Circle"
          props={{
            radius: 80,
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

export default Circle;
