import HomeView from "./view";
import { useEffect, useRef, useState } from "react";
import {
  createCanvas,
  createCanvasGroup,
  drawingBrush,
  eraser,
  loadSVGFromString,
  prepareCrop,
} from "../utils";
import services from "../upload-image/service";

const defaultState = {
  image: [],
  text: [],
  canvas: null,
  isActiveObject: null,
  clipboard: null,
  canvasBackgroundColor: "",
  loadSvg: "",
  currentTab: "1",
  group: [],
  canvasHistory: [],
  currentStateIndex: -1,
  drawnObject: {},
  isDrawingMode: false,
  isCopyObj: false,
  isOpen: false,
  isAnimate: false,
  isDialogOpen: false,
  canvasDrawing: {
    mode: "Pencil",
    lineWidth: "2",
    lineColor: "#000000",
    lineShadow: "2",
  },
  textBoxProps: {
    underline: false,
    fontSize: 32,
    bold: false,
    overline: false,
    italic: false,
    linethrough: false,
    textBackgroundColor: "#fff",
    lockRotation: false,
    lockMovementX: false,
    lockMovementY: false,
    fill: "black",
    borderColor: "",
    charSpacing: 0,
    textAlign: "center",
  },
  textProps: {
    underline: false,
    fontSize: 32,
    bold: false,
    overline: false,
    linethrough: false,
    textColor: "red",
    textBackgroundColor: "white",
    dirty: false,
    absolutePositioned: false,
  },
  shadowProps: {
    selectable: false,
    lockRotation: false,
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
    shadowBlur: 0,
  },
  rectProps: {
    dirty: false,
    fill: "#7f7f7f",
    backgroundColor: "#7f7f7f",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
    angle: 1,
    left: "",
    top: "",
    skewX: "",
    skewY: "",
  },
  polygonProps: {
    selectable: false,
    lockRotation: false,
    affectStroke: false,
    fill: "red",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
    opacity: "0.5",
  },
  pathProps: {
    selectable: false,
    affectStroke: false,
    fill: "black",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
    opacity: "0.5",
  },
  lineProps: {
    selectable: false,
    affectStroke: false,
    fill: "",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
  },
  ellipseProps: {
    selectable: false,
    lockRotation: false,
    flipX: false,
    flipY: false,
    absolutePositioned: false,
    affectStroke: false,
    dirty: false,
    fill: "#eb8e81",
    backgroundColor: "",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
    opacity: "0.5",
  },
  circleProps: {
    lockRotation: false,
    lockMovementY: false,
    lockMovementX: false,
    fill: "#7f7f7f",
    backgroundColor: "",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
    opacity: "0.5",
    radius: "80",
  },
  triangleProps: {
    lockRotation: false,
    dirty: false,
    lockMovementY: false,
    lockMovementX: false,
    fill: "teal",
    backgroundColor: "",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
  },
  imageProps: {
    absolutePositioned: false,
    dirty: false,
    brightness: "1",
    borderColor: "",
    strokeColor: "",
    shadowColor: "",
    blur: 1,
    saturation: 1,
    contrast: 1,
  },
};

const Home = () => {
  const [state, setState] = useState(defaultState);
  const canvasRef = useRef(null);

  useEffect(() => {
    const newCanvas = createCanvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: state.canvasBackgroundColor,
      // imageSmoothingEnabled: true,
      // perPixelTargetFind: true,
      // targetFindTolerance: 5,
    });

    setState((prevState) => ({
      ...prevState,
      canvas: newCanvas,
    }));

    newCanvas.on("selection:created", (e) => {
      setState((prevState) => ({
        ...prevState,
        isActiveObject: e.target,
      }));
    });

    newCanvas.on("selection:updated", (e) => {
      setState((prevState) => ({
        ...prevState,
        isActiveObject: e.target,
      }));
    });

    newCanvas.on("selection:cleared", (e) => {
      setState((prevState) => ({
        ...prevState,
        isActiveObject: null,
      }));
    });

    newCanvas.on("object:added", updatedCanvasState);

    return () => {
      newCanvas.dispose();
    };
  }, [state.canvasDrawing, state.canvasBackgroundColor]);

  const updatedCanvasState = (e) => {
    const object = e.target;
    setState((prevState) => ({
      ...prevState,
      canvasHistory: [...prevState.canvasHistory, JSON.stringify(object)],
    }));
  };

  const handleUndo = (canvasHistory) => {
    if (canvasHistory.length > 0) {
      state.canvas.clear();
      // console.log("canvasHistory", canvasHistory);
      canvasHistory.pop();
      var prevState = JSON.parse(canvasHistory[canvasHistory.length - 1]);
      state.canvas.loadFromJSON(
        prevState,
        state.canvas.renderAll.bind(state.canvas)
      );
    }
  };

  const handleRedo = () => {};

  const handleChange = (evt, key, type) => {
    const value = type === "checkbox" ? evt.target.checked : evt.target.value;
    const name = evt.target.name;
    setState((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        [name]: value,
      },
    }));
  };

  const handleRemoveSelectedObject = () => {
    const selectedObject = state.canvas?.getActiveObject();
    if (selectedObject) {
      state.canvas.remove(selectedObject);
      state.canvas.discardActiveObject();
      setState((prevState) => ({
        ...prevState,
        group: state.group.filter((item) => item.type !== selectedObject.type),
      }));
      state.canvas.renderAll();
    } else {
      alert("No object selected.");
    }
  };

  const handleIncreaseFontSize = () => {
    setState((prevState) => ({
      ...prevState,
      textBoxProps: {
        ...prevState.textBoxProps,
        fontSize: prevState.textBoxProps.fontSize + 1,
      },
    }));
  };
  const handleDecreaseFontSize = () => {
    setState((prevState) => ({
      ...prevState,
      textBoxProps: {
        ...prevState.textBoxProps,
        fontSize: prevState.textBoxProps.fontSize - 1,
      },
    }));
  };

  const handleGroupCanvas = (canvas) => {
    setState((prevState) => ({
      ...prevState,
      group: [...prevState.group, canvas],
    }));
  };

  const handleGroup = (group = []) => {
    if (group.length === 1) {
      return;
    }
    state.canvas.bringToFront(group[group.length - 1]);
    state.group.map((item) => {
      state.canvas.setActiveObject(item);
    });
    const groupCanvas = createCanvasGroup(group);
    state.canvas.setActiveObject(groupCanvas);
    state.canvas.add(groupCanvas);
    state.canvas.renderAll();
  };

  const handleDownloadCanvas = () => {
    const downloadLink = document.createElement("a");
    const dataURL = state.canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    if (state.canvas._objects.length === 0) {
      alert(
        "Your canvas is empty! Please add some objects before downloading."
      );
      return;
    }
    downloadLink.href = dataURL;
    downloadLink.download = "canvas_image.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleDrawingMode = (value) => {
    state.canvas.isDrawingMode = value;
    const brush = drawingBrush(state.canvasDrawing.mode, state.canvas);
    brush.width = state.canvasDrawing.lineWidth || 2;
    brush.color = state.canvasDrawing.lineColor;
    state.canvas.freeDrawingBrush = brush;
    setState((prevState) => ({
      ...prevState,
      isDrawingMode: value,
    }));
  };

  const handleExitDrawingMode = (value) => {
    state.canvas.isDrawingMode = value;
    setState((prevState) => ({
      ...prevState,
      isDrawingMode: value,
    }));
  };

  // useEffect(() => {
  //    handleDrawingMode(true);
  // }, [state.isDrawingMode]);

  const handleLoadSvgChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSvgLoad = (svgString) => {
    loadSVGFromString(svgString, (svgObjects) => {
      state.canvas.add(svgObjects).renderAll();
    });
    setState((prevState) => ({
      ...prevState,
      loadSvg: "",
    }));
  };

  const handelDrawingChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    setState((prevState) => ({
      ...prevState,
      canvasDrawing: {
        ...prevState.canvasDrawing,
        [name]: value,
      },
    }));
  };

  const handleCropImage = () => {
    let activeObject = state.canvas?.getActiveObject();
    if (activeObject && activeObject.type === "image") {
      prepareCrop(activeObject, state.canvas);
    }
  };

  const handleBringToFront = () => {
    state.canvas.bringToFront(state.group[state.group.length - 1]);
    state.group.map((item) => {
      state.canvas.setActiveObject(item);
    });
  };

  const handleCanvasChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const activeObject = (isActiveObject) => {
    setState((prevState) => ({
      ...prevState,
      isActiveObject,
    }));
  };

  const handleChangeTab = (tab) => {
    setState((prevState) => ({
      ...prevState,
      currentTab: tab,
      isDrawingMode: false,
    }));
  };

  const handleClearCanvas = () => {
    state.canvas.clear();
    setState((prevState) => ({
      ...prevState,
      group: [],
    }));
  };

  const handleSetBackgroundImage = () => {
    setState((prevState) => ({
      ...prevState,
      isDialogOpen: true,
    }));
  };

  const onClose = () => {
    setState((prevState) => ({
      ...prevState,
      isDialogOpen: false,
    }));
  };

  const fetchImage = async () => {
    let data = await services.getImage("rooms");
    setState((prevState) => ({
      ...prevState,
      image: data || [],
    }));
  };

  const handleSendToBack = () => {
    const activeObject = state.canvas?.getActiveObject();
    if (activeObject) {
      state.canvas.sendToBack(activeObject);
      state.canvas.renderAll();
      alert("Selected object moved to the back of the canvas.");
    }
  };

  const handleDecreaseCharSpace = () => {
    setState((prevState) => ({
      ...prevState,
      textBoxProps: {
        ...prevState.textBoxProps,
        charSpacing: prevState.textBoxProps.charSpacing - 1,
      },
    }));
  };

  const handleIncreaseCharSpace = () => {
    setState((prevState) => ({
      ...prevState,
      textBoxProps: {
        ...prevState.textBoxProps,
        charSpacing: prevState.textBoxProps.charSpacing + 1,
      },
    }));
  };

  const zoomIn = () => {
    var obj = state.canvas.getActiveObject();
    if (obj) {
      obj.scaleX *= 1.1;
      obj.scaleY *= 1.1;
      state.canvas.renderAll();
    }
  };

  const ZoomOut = () => {
    var obj = state.canvas.getActiveObject();
    if (obj) {
      obj.scaleX /= 1.1;
      obj.scaleY /= 1.1;
      state.canvas.renderAll();
    }
  };

  const handleCopyObject = () => {
    const activeObject = state.canvas?.getActiveObject();
    if (activeObject) {
      activeObject.clone((cloned) => {
        console.log("cloned", cloned);
        setState((prevState) => ({
          ...prevState,
          clipboard: cloned,
          isCopyObj: true,
        }));
      });
    }
  };

  const handlePasteObject = () => {
    if (!state.clipboard) {
      alert("Please Copy Object.");
      return;
    }
    state.clipboard.clone((clonedObj) => {
      state.canvas.discardActiveObject();
      clonedObj.set({
        left: clonedObj.left + 100,
        top: clonedObj.top + 100,
        evented: true,
      });
      if (clonedObj.type === "activeSelection") {
        clonedObj.canvas = state.canvas;
        clonedObj.forEachObject((obj) => {
          state.canvas.add(obj);
        });
        clonedObj.setCoords();
      } else {
        state.canvas.add(clonedObj);
      }
      state.clipboard.top += 10;
      state.clipboard.left += 10;
      state.canvas.setActiveObject(clonedObj);
      state.canvas.requestRenderAll();
    });
    setState((prevState) => ({
      ...prevState,
      isCopyObj: false,
    }));
  };

  const handleGroupSelectedCanvas = () => {
    if (!state.canvas.getActiveObject()) {
      return;
    }
    if (state.canvas.getActiveObject().type !== "activeSelection") {
      return;
    }
    state.canvas.getActiveObject().toGroup();
    state.canvas.requestRenderAll();
  };

  const handleEraser = (target) => {
    // if (typeof target === "string") target = document.getElementById(target);
    // if (target.id === "erase") {
    //   state.canvas.isDialogOpen = true;
    //   state.canvas.freeDrawingBrush = eraser(state.canvas);
    //   state.canvas.freeDrawingBrush.color = "white";
    //   state.canvas.freeDrawingBrush.width = 15;
    // }
  };

  const handleAnimate = () => {
    setState((prevState) => ({
      ...prevState,
      isAnimate: true,
    }));
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <HomeView
        canvasRef={canvasRef}
        handleChange={handleChange}
        handleIncreaseFontSize={handleIncreaseFontSize}
        handleDecreaseFontSize={handleDecreaseFontSize}
        isActiveObject={state.isActiveObject}
        canvas={state.canvas}
        handleGroupCanvas={handleGroupCanvas}
        handleGroup={handleGroup}
        handleDownloadCanvas={handleDownloadCanvas}
        handleRemoveSelectedObject={handleRemoveSelectedObject}
        handleDrawingMode={handleDrawingMode}
        handleExitDrawingMode={handleExitDrawingMode}
        isDrawingMode={state.isDrawingMode}
        handelDrawingChange={handelDrawingChange}
        canvasDrawing={state.canvasDrawing}
        handleCanvasChange={handleCanvasChange}
        canvasBackgroundColor={state.canvasBackgroundColor}
        handleBringToFront={handleBringToFront}
        handleCropImage={handleCropImage}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        group={state.group}
        handleChangeTab={handleChangeTab}
        currentTab={state.currentTab}
        handleLoadSvgChange={handleLoadSvgChange}
        loadSvg={state.loadSvg}
        handleSvgLoad={handleSvgLoad}
        handleClearCanvas={handleClearCanvas}
        properties={state.properties}
        activeObject={activeObject}
        textBoxProps={state.textBoxProps}
        shadowProps={state.shadowProps}
        rectProps={state.rectProps}
        polygonProps={state.polygonProps}
        pathProps={state.pathProps}
        lineProps={state.lineProps}
        ellipseProps={state.ellipseProps}
        circleProps={state.circleProps}
        triangleProps={state.triangleProps}
        imageProps={state.imageProps}
        handleSetBackgroundImage={handleSetBackgroundImage}
        handleSendToBack={handleSendToBack}
        isOpen={state.isOpen}
        textProps={state.textProps}
        handleDecreaseCharSpace={handleDecreaseCharSpace}
        handleIncreaseCharSpace={handleIncreaseCharSpace}
        zoomIn={zoomIn}
        ZoomOut={ZoomOut}
        canvasHistory={state.canvasHistory}
        handleCopyObject={handleCopyObject}
        handlePasteObject={handlePasteObject}
        isCopyObj={state.isCopyObj}
        handleGroupSelectedCanvas={handleGroupSelectedCanvas}
        handleEraser={handleEraser}
        handleAnimate={handleAnimate}
        isAnimate={state.isAnimate}
        isDialogOpen={state.isDialogOpen}
        onClose={onClose}
        image={state.image}
      />
    </>
  );
};

export default Home;
