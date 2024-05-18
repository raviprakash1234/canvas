import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Ellipse = ({
  canvas = null,
  handleGroupCanvas = () => {},
  activeObject = () => {},
  ellipseProps = {},
}) => {
  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        selectable: objectProps.selectable,
        lockRotation: objectProps.lockRotation,
        flipX: objectProps.flipX,
        flipY: objectProps.flipY,
        affectStroke: objectProps.affectStroke,
        absolutePositioned: objectProps.absolutePositioned,
        dirty: objectProps.dirty,
        fill: objectProps.fill,
        borderColor: objectProps.borderColor,
        strokeColor: objectProps.strokeColor,
        shadowColor: objectProps.shadowColor,
        backgroundColor: objectProps.backgroundColor,
        opacity: objectProps.opacity,
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(ellipseProps);
  }, [ellipseProps]);
  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="Ellipse"
          props={{
            fill: "red",
            rx: 150,
            ry: 80,
            strokeWidth: 2,
            stroke: "black",
            opacity: 0.5,
          }}
          activeObject={activeObject}
          handleGroupCanvas={handleGroupCanvas}
        />
      </div>
    </>
  );
};

export default Ellipse;
