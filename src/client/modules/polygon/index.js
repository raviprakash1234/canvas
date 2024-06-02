import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Polygon = ({
  canvas = null,
  activeObject = () => {},
  handleGroupCanvas = () => {},
  polygonProps = {},
}) => {
  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        selectable: objectProps.selectable,
        lockRotation: objectProps.lockRotation,
        affectStroke: objectProps.affectStroke,
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
    applyStyle(polygonProps);
  }, [polygonProps]);
  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="Polygon"
          props={{
            fill: "red",
            strokeWidth: 2,
            stroke: "black",
            opacity: 0.5,
          }}
          activeObject={activeObject}
          handleGroupCanvas={handleGroupCanvas}
          firstArgument={[
            { x: 10, y: 10 },
            { x: 50, y: 30 },
            { x: 40, y: 70 },
            { x: 60, y: 50 },
            { x: 100, y: 150 },
            { x: 40, y: 100 },
          ]}
          isAnimate={false}
        />
      </div>
    </>
  );
};

export default Polygon;
