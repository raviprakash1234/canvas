import Circle from "../circle";
import Ellipse from "../ellipse";
import Line from "../line";
import SvgPath from "../path";
import Polygon from "../polygon";
import Rect from "../rect";
import Shadows from "../shadows";
import Triangle from "../triangle";
import UploadImage from "../upload-image";
import TextBox from "../textbox";
import Text from "../text";
import TextboxProps from "../textbox/textboxProps";
import TextProps from "../text/textProps";
import ShadowProps from "../shadows/shadowProps";
import RectProps from "../rect/rectProps";
import PolygonProps from "../polygon/polygonProps";
import PathProps from "../path/pathProps";
import LineProps from "../line/lineProps";
import EllipseProps from "../ellipse/ellipseProps";
import CircleProp from "../circle/circleProps";
import TriangleProps from "../triangle/triangleProps";
import ImageProps from "../upload-image/imageProps";

let tabList = [
  { name: "Basic Design", id: "1" },
  { name: "Canvas Tools", id: "2" },
  { name: "SVG Shapes", id: "3" },
  { name: "Load Svg", id: "4" },
];

const HomeView = ({
  currentTab = "1",
  canvasBackgroundColor = "",
  loadSvg = "",
  canvasRef = null,
  isActiveObject = null,
  canvas = null,
  isDrawingMode = false,
  isCopyObj = false,
  group = [],
  canvasHistory = [],
  canvasDrawing = {},
  textBoxProps = {},
  shadowProps = {},
  rectProps = {},
  polygonProps = {},
  pathProps = {},
  lineProps = {},
  ellipseProps = {},
  circleProps = {},
  triangleProps = {},
  imageProps = {},
  textProps = {},
  handleChange = () => {},
  handleIncreaseFontSize = () => {},
  handleDecreaseFontSize = () => {},
  handleGroup = () => {},
  handleGroupCanvas = () => {},
  handleDownloadCanvas = () => {},
  handleRemoveSelectedObject = () => {},
  handleDrawingMode = () => {},
  handelDrawingChange = () => {},
  handleCanvasChange = () => {},
  handleBringToFront = () => {},
  handleUndo = () => {},
  handleRedo = () => {},
  handleChangeTab = () => {},
  handleLoadSvgChange = () => {},
  handleSvgLoad = () => {},
  handleClearCanvas = () => {},
  activeObject = () => {},
  handleCropImage = () => {},
  handleSetBackgroundImage = () => {},
  handleSendToBack = () => {},
  handleDecreaseCharSpace = () => {},
  handleIncreaseCharSpace = () => {},
  zoomIn = () => {},
  ZoomOut = () => {},
  handleCopyObject = () => {},
  handlePasteObject = () => {},
  handleGroupSelectedCanvas = () => {},
  handleEraser = () => {},
}) => {
  const renderCurrentTab = (tab = "") => {
    let content = <></>;
    switch (tab) {
      case "1":
        content = (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                height: "50px",
              }}
            >
              <TextBox
                canvas={canvas}
                handleGroupCanvas={handleGroupCanvas}
                textBoxProps={textBoxProps}
                activeObject={activeObject}
              />

              <Rect
                canvas={canvas}
                rectProps={rectProps}
                activeObject={activeObject}
                handleGroupCanvas={handleGroupCanvas}
              />
              <Line
                canvas={canvas}
                handleGroupCanvas={handleGroupCanvas}
                activeObject={activeObject}
                lineProps={lineProps}
              />
              <Circle
                canvas={canvas}
                handleGroupCanvas={handleGroupCanvas}
                activeObject={activeObject}
                circleProps={circleProps}
              />
              <Triangle
                canvas={canvas}
                handleGroupCanvas={handleGroupCanvas}
                activeObject={activeObject}
                triangleProps={triangleProps}
              />
              <Ellipse
                canvas={canvas}
                handleGroupCanvas={handleGroupCanvas}
                activeObject={activeObject}
                ellipseProps={ellipseProps}
              />
              <Shadows
                canvas={canvas}
                handleGroupCanvas={handleGroupCanvas}
                activeObject={activeObject}
                shadowProps={shadowProps}
              />
              <Polygon
                canvas={canvas}
                activeObject={activeObject}
                polygonProps={polygonProps}
                handleGroupCanvas={handleGroupCanvas}
              />
              <Text
                canvas={canvas}
                activeObject={activeObject}
                textProps={textProps}
                // handleGroupCanvas={handleGroupCanvas}
              />
            </div>
          </>
        );
        break;
      case "2":
        content = (
          <>
            <div
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                height: "50px",
                marginTop: "48px",
              }}
            >
              <div style={{ marginLeft: "12px" }}>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleRemoveSelectedObject()}
                >
                  Remove Selected Object
                </button>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleDrawingMode()}
                >
                  {isDrawingMode ? "Exit" : "Enter in"} Drawing mode
                </button>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleBringToFront()}
                >
                  Bring To Front
                </button>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleClearCanvas()}
                >
                  Clear Canvas
                </button>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleSetBackgroundImage()}
                >
                  Background Image
                </button>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleSendToBack()}
                >
                  Send To back
                </button>
                <button
                  style={
                    isCopyObj
                      ? {
                          marginLeft: "12px",
                          cursor: "pointer",
                          border: "none",
                          borderRadius: "10px",
                          height: "30px",
                          backgroundColor: "red",
                          color: "white",
                          fontSize: "14px",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          fontWeight: "bold",
                          pointerEvents: "none",
                        }
                      : {
                          marginLeft: "12px",
                          cursor: "pointer",
                          border: "none",
                          borderRadius: "10px",
                          height: "30px",
                          backgroundColor: "teal",
                          color: "white",
                          fontSize: "14px",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          fontWeight: "bold",
                        }
                  }
                  onClick={() => handleCopyObject()}
                >
                  Copy Selected Object
                </button>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handlePasteObject()}
                >
                  Paste Object
                </button>
                <button
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                    marginTop: "12px",
                  }}
                  onClick={() => handleGroupSelectedCanvas()}
                >
                  Group Selected Canvas
                </button>
                <button
                  id="erase"
                  style={{
                    marginLeft: "12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    height: "30px",
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontWeight: "bold",
                    marginTop: "12px",
                  }}
                  onClick={() => handleEraser("erase")}
                >
                  Eraser
                </button>
                <div
                  style={{
                    marginRight: "12px",
                    marginTop: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    type="color"
                    name="canvasBackgroundColor"
                    value={canvasBackgroundColor}
                    onChange={handleCanvasChange}
                  />
                  <label>Canvas Background</label>
                  <div>
                    <img
                      style={{ width: "50px", cursor: "pointer" }}
                      src="/assets/group.png"
                      alt="group icon"
                      onClick={() => handleGroup(group)}
                    />
                    <p style={{ fontSize: "16px", marginTop: "-7px" }}>
                      Group All
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        break;
      case "3":
        content = (
          <>
            <div style={{ marginLeft: "12px", height: "50px" }}>
              <SvgPath
                canvas={canvas}
                handleGroupCanvas={handleGroupCanvas}
                activeObject={activeObject}
                pathProps={pathProps}
              />
            </div>
          </>
        );
        break;
      case "4":
        content = (
          <>
            <div
              style={{
                marginLeft: "12px",
                height: "50px",
                marginBottom: "12px",
              }}
            >
              <div>
                <textarea
                  style={{ width: "430px", height: "100px" }}
                  type="text"
                  name="loadSvg"
                  value={loadSvg}
                  onChange={handleLoadSvgChange}
                  placeholder="Enter SVG path..."
                />
              </div>
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "10px",
                  height: "30px",
                  backgroundColor: "teal",
                  color: "white",
                  fontSize: "14px",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  fontWeight: "bold",
                }}
                onClick={() => handleSvgLoad(loadSvg)}
              >
                Load
              </button>
            </div>
          </>
        );
        break;
      default:
    }
    return content;
  };

  return (
    <>
      {tabList.map((item) => (
        <button
          style={{
            border: "none",
            marginLeft: "12px",
            height: "40px",
            width: "200px",
            color: "gray",
            fontSize: "18px",
            marginBottom: "12px",
            borderRadius: "10px",
            backgroundColor: "white",
            marginTop: "10px",
            cursor: "pointer",
            boxShadow: `${
              currentTab === item.id ? "0px 2px 4px rgba(0, 0, 0, 0.4)" : "none"
            }`,
          }}
          onClick={() => handleChangeTab(item.id)}
        >
          {item.name}
        </button>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {renderCurrentTab(currentTab)}
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "end",
          }}
        >
          <img
            onClick={() => handleUndo(canvasHistory)}
            style={{ width: "40px", cursor: "pointer" }}
            src="/assets/undo.png"
            alt=""
          />
          <img
            onClick={handleRedo}
            style={{ width: "40px", cursor: "pointer" }}
            src="/assets/redo.png"
            alt=""
          />
          <img
            style={{
              width: "40px",
              marginRight: "12px",
              cursor: "pointer",
            }}
            src="/assets/download.png"
            alt=""
            onClick={() => handleDownloadCanvas()}
          />
        </div>
      </div>

      {isDrawingMode && (
        <div
          style={{
            width: "350px",
            height: "100px",
            backgroundColor: "pink",
            marginLeft: "850px",
            marginTop: "-4px",
          }}
        >
          <label>Mode:</label>
          <select
            style={{
              marginTop: "8px",
              marginLeft: "12px",
              width: "200px",
            }}
            name="mode"
            value={canvasDrawing.mode}
            onChange={handelDrawingChange}
          >
            <option>Pencil</option>
            <option>Circle</option>
            <option>Spray</option>
            <option>Pattern</option>
          </select>
          <div>
            <label>Line width:</label>
            <input
              type="range"
              name="lineWidth"
              min="2"
              value={canvasDrawing.lineWidth}
              onChange={handelDrawingChange}
            />
          </div>
          <div>
            <label>Line color:</label>
            <input
              type="color"
              name="lineColor"
              value={canvasDrawing.lineColor}
              onChange={handelDrawingChange}
            />
          </div>
          <div>
            <label>Line shadow width:</label>
            <input
              type="range"
              name="lineShadow"
              min="2"
              value={canvasDrawing.lineShadow}
              onChange={handelDrawingChange}
            />
          </div>
        </div>
      )}

      <div>
        <div
          style={{
            display: "flex",
            marginLeft: "300px",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid grey",
              width: "300px",
              height: "554px",
              borderRadius: "12px",
              padding: "24px",
              overflowY: "scroll",
            }}
          >
            {isActiveObject?.type === "textbox" && (
              <TextboxProps
                handleChange={handleChange}
                handleIncreaseFontSize={handleIncreaseFontSize}
                handleDecreaseFontSize={handleDecreaseFontSize}
                fontSize={textBoxProps.fontSize}
                textBoxProps={textBoxProps}
                isActiveObject={isActiveObject}
                handleDecreaseCharSpace={handleDecreaseCharSpace}
                handleIncreaseCharSpace={handleIncreaseCharSpace}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "text" && (
              <TextProps handleChange={handleChange} textProps={textProps} />
            )}
            {isActiveObject?.type === "group" && (
              <ShadowProps
                handleChange={handleChange}
                shadowProps={shadowProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "rect" && (
              <RectProps
                handleChange={handleChange}
                rectProps={rectProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "polygon" && (
              <PolygonProps
                handleChange={handleChange}
                polygonProps={polygonProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "path" && (
              <PathProps
                handleChange={handleChange}
                pathProps={pathProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "line" && (
              <LineProps
                handleChange={handleChange}
                lineProps={lineProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "ellipse" && (
              <EllipseProps
                handleChange={handleChange}
                ellipseProps={ellipseProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "circle" && (
              <CircleProp
                handleChange={handleChange}
                circleProps={circleProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "triangle" && (
              <TriangleProps
                handleChange={handleChange}
                triangleProps={triangleProps}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
            {isActiveObject?.type === "image" && (
              <ImageProps
                handleChange={handleChange}
                handleCropImage={handleCropImage}
                zoomIn={zoomIn}
                ZoomOut={ZoomOut}
              />
            )}
          </div>
          <div>
            <canvas
              ref={canvasRef}
              style={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
                border: "1px solid black",
              }}
              id="fabric-canvas"
            />
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "250px",
              height: "554px",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <UploadImage
              canvas={canvas}
              handleGroupCanvas={handleGroupCanvas}
              activeObject={activeObject}
              imageProps={imageProps}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
