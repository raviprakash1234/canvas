import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Line = ({
  canvas = null,
  handleGroupCanvas = () => {},
  activeObject = () => {},
  lineProps = {},
}) => {
  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        selectable: objectProps.selectable,
        affectStroke: objectProps.affectStroke,
        fill: objectProps.fill,
        borderColor: objectProps.borderColor,
        strokeColor: objectProps.strokeColor,
        shadowColor: objectProps.shadowColor,
        backgroundColor: objectProps.backgroundColor,
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(lineProps);
  }, [lineProps]);
  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="Line"
          props={{
            fill: "black",
            stroke: "black",
            strokeWidth: 2,
            selectable: true,
          }}
          activeObject={activeObject}
          handleGroupCanvas={handleGroupCanvas}
          firstArgument={[50, 50, 250, 400]}
        />
      </div>
    </>
  );
};

export default Line;
