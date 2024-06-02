import { useEffect } from "react";
import Canvas from "../shared/components/canvas";

const Text = ({
  canvas = null,
  handleGroupCanvas = () => {},
  activeObject = () => {},
  textProps = {},
}) => {
  let data = [
    {
      color: "red",
      text: `It is a long established fact that a reader will 
      be distracted by the readable content 
      of a page when looking at its layout. The point of 
      using Lorem Ipsum is that it has a more-or-less 
      normal distribution of letters, as opposed to using 
      'Content here, content here', making it look like 
      readable English. Many desktop publishing packages and 
      web page editors now use Lorem Ipsum as 
      their default model text, and a search for 'lorem ipsum' 
      will uncover many web sites still in their infancy.`,
    },
  ];

  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        underline: objectProps.underline,
        fontSize: objectProps.fontSize,
        fontWeight: objectProps.bold ? "bold" : "normal",
        overline: objectProps.overline,
        linethrough: objectProps.linethrough,
        textBackgroundColor: objectProps.textBackgroundColor,
        lockRotation: objectProps.lockRotation,
        lockMovementX: objectProps.lockMovementX,
        lockMovementY: objectProps.lockMovementY,
        borderColor: objectProps.borderColor,
      };
      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(textProps);
  }, [textProps]);

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <Canvas
              canvas={canvas}
              objectType="Text"
              props={{
                left: Math.random() * 200,
                top: Math.random() * 450,
                textAlign: "center",
                charSpacing: -50,
                pathSide: "left",
                pathStartOffset: 0,
                fill: item.color,
                fontSize: 25,
              }}
              activeObject={activeObject}
              handleGroupCanvas={handleGroupCanvas}
              firstArgument={item.text}
              isAnimate={false}
            />
          </>
        );
      })}
    </>
  );
};

export default Text;
