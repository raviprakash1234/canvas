import { useCallback, useEffect, useState } from "react";
import services from "./service";
import Canvas from "../shared/components/canvas";

const defaultState = {
  path: [],
  svgData: null,
};

const SvgPath = ({
  canvas = null,
  handleGroupCanvas = () => {},
  activeObject = () => {},
  pathProps = {},
}) => {
  const [state, setState] = useState(defaultState);

  const avgNumber = [
    "109",
    "25",
    "36",
    "58",
    "59",
    "8",
    "151",
    "17",
    "2",
    "69",
    "146",
    "98",
    "37",
    "102",
    "61",
    "48",
    "67",
    "138",
    "77",
    // "95",
    // "76",
    // "55",
    // "6",
    // "22",
    // "23",
    // "33",
    // "34",
    // "21",
    // "26",
  ];

  const fetchSvgPath = useCallback(async (number, canvas) => {
    const data = await services.getSvg(number);
    setState((prevState) => ({
      ...prevState,
      svgData: data,
    }));
  }, []);

  const applyStyle = (objectProps) => {
    // console.log("objectProps", objectProps);
    if (objectProps) {
      const styles = {
        selectable: objectProps.selectable,
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
    applyStyle(pathProps);
  }, [pathProps]);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Add Svg shapes to canvas:</h3>
        <p style={{ fontSize: "12px" }}>(Click To know the Shape)</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {avgNumber.map((item, index) => (
          <div>
            <button
              style={{
                borderRadius: "10px",
                backgroundColor: "teal",
                color: "white",
                height: "30px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => fetchSvgPath(item, canvas)}
            >
              {item} Paths
            </button>
          </div>
        ))}
        <Canvas
          objectType="Path"
          canvas={canvas}
          isButtonVisible={false}
          handleGroupCanvas={handleGroupCanvas}
          svgData={state.svgData}
          activeObject={activeObject}
        />
      </div>
    </>
  );
};

export default SvgPath;
