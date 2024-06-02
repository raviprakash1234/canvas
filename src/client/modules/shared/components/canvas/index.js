import { useEffect, useState } from "react";
import {
  addSVGFromURL,
  fromFabricUrl,
  loadSVGUrl,
  simpleFabric,
} from "../../../utils";

const defaultState = {
  object: [],
  isActiveObject: null,
  path: [],
  isActivePath: null,
};

const Canvas = ({
  imageUrl = "",
  objectType = "",
  isButtonVisible = true,
  isAnimate = false,
  props = {},
  canvas = null,
  firstArgument = null,
  svgData = null,
  activeObject = () => {},
  handleGroupCanvas = () => {},
}) => {
  const [state, setState] = useState(defaultState);
  const addCanvas = (isShadow = false) => {
    if (isShadow) {
      onAddShadows();
    } else {
      if (canvas) {
        const object = simpleFabric(objectType, firstArgument, props);
        object.on("mousedown", () => {
          activeObject(object);
        });
        canvas.add(object);
        canvas.setActiveObject(object);
        handleGroupCanvas(object);
        setState((prevState) => ({
          ...prevState,
          object: [...prevState.object, object],
          isActiveObject: object,
        }));
      }
    }
  };

  const onAddShadows = () => {
    addSVGFromURL(
      "/assets/eg.svg",
      canvas,
      (obj) => {
        obj.on("mousedown", () => {
          activeObject(obj);
        });
        canvas.add(obj);
        handleGroupCanvas(obj);
        setState((prevState) => ({
          ...prevState,
          object: [...prevState.object, obj],
          isActiveObject: obj,
        }));
      },
      isAnimate
    );

    return () => {
      canvas.dispose();
    };
  };

  const getSvgPath = (svgData = null) => {
    if (!!svgData) {
      loadSVGUrl(svgData.url, (objects, options) => {
        handleAddSvg(objects, canvas);
      });
    }
  };

  const handleAddSvg = (objectData, canvas) => {
    let svgPath = objectData[0]?.d;
    const path = simpleFabric(objectType, svgPath, {
      fill: "black",
      stroke: "black",
      strokeWidth: 2,
      height: 700,
    });
    path.on("mousedown", () => {
      activeObject(path);
    });
    canvas.add(
      path.set({ left: Math.random() * 600, top: Math.random() * 300 })
    );
    canvas.setActiveObject(path);
    handleGroupCanvas(path);
    setState((prevState) => ({
      ...prevState,
      object: [...prevState.object, path],
      isActiveObject: path,
    }));
  };

  const handleAddImage = (imgLink) => {
    if (canvas && imgLink) {
      fromFabricUrl(objectType, imgLink, (img) => {
        img.on("mousedown", () => {
          activeObject(img);
        });
        canvas.add(img);
        canvas.renderAll();
        handleGroupCanvas(img);
        canvas.setActiveObject(img);

        setState((prevState) => ({
          ...prevState,
          object: [...prevState.object, img],
          isActiveObject: img,
        }));
      });
    }
  };

  // const getOverlappingObjects = (targetObject) => {
  //   canvas.forEachObject((obj) => {
  //     if (obj !== targetObject && obj.intersectsWithObject(targetObject)) {
  //       handleGroupCanvas(obj);
  //     }
  //   });
  // };

  // canvas?.on("mouse:down", (options) => {
  //   const targetObject = options.target;
  //   if (targetObject) {
  //     getOverlappingObjects(targetObject);
  //   }
  // });

  useEffect(() => {
    activeObject(state.isActiveObject);
  }, [state.isActiveObject]);

  useEffect(() => {
    getSvgPath(svgData);
  }, [svgData]);

  useEffect(() => {
    handleAddImage(imageUrl);
  }, [imageUrl]);

  return (
    <>
      {isButtonVisible && (
        <button
          style={{
            backgroundColor: "#4caf50",
            border: "none",
            color: "white",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
          onClick={() =>
            addCanvas(objectType === "loadSVGFromURL" ? true : false)
          }
        >
          Add {objectType === "loadSVGFromURL" ? "Shadow" : objectType}
        </button>
      )}
      {}
    </>
  );
};

export default Canvas;
