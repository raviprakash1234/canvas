import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Shadows = ({
  canvas = null,
  handleGroupCanvas = () => {},
  activeObject = () => {},
  shadowProps = {},
}) => {
  const applyStyle = (objectProps) => {
    let blurValue = Number(objectProps.shadowBlur);
    if (objectProps) {
      const styles = {
        selectable: objectProps.selectable,
        lockRotation: objectProps.lockRotation,
        borderColor: objectProps.borderColor,
        strokeColor: objectProps.strokeColor,
        shadowColor: objectProps.shadowColor,
        blur: blurValue,
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(shadowProps);
  }, [shadowProps]);
  return (
    <>
      <div>
        <Canvas
          canvas={canvas}
          objectType="loadSVGFromURL"
          activeObject={activeObject}
          handleGroupCanvas={handleGroupCanvas}
        />
      </div>
    </>
  );
};

export default Shadows;
