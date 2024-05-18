import { useEffect, useState } from "react";
import services from "./service";
import Canvas from "../shared/components/canvas";
import { applyFilterOnImage } from "../utils";

const defaultState = {
  image: [],
  imageUrl: "",
};

const UploadImage = ({
  canvas = null,
  handleGroupCanvas = () => {},
  activeObject = () => {},
  imageProps = {},
}) => {
  const [state, setState] = useState(defaultState);
  const fetchImage = async () => {
    let data = await services.getImage("hotels");
    setState((prevState) => ({
      ...prevState,
      image: data || [],
    }));
  };

  const handleSetImageUrl = (url) => {
    setState((prevState) => ({
      ...prevState,
      imageUrl: url,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgURL = e.target.result;
        setState((prevState) => ({
          ...prevState,
          imageUrl: imgURL,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const applyFilter = (type, activeObject, objectProps) => {
    let filter;
    if (type === "image") {
      if (objectProps.blur > 1) {
        const blurValue = "0." + objectProps.blur;
        filter = applyFilterOnImage({ blur: parseFloat(blurValue) }, "Blur");
      } else if (objectProps.saturation > 1) {
        const saturationValue = "0." + objectProps.saturation;
        filter = applyFilterOnImage(
          { saturation: parseFloat(saturationValue) },
          "Saturation"
        );
      } else if (objectProps.contrast > 1) {
        const contrastValue = "0." + objectProps.contrast;
        filter = applyFilterOnImage(
          { contrast: parseFloat(contrastValue) },
          "Contrast"
        );
      } else {
        const brightnessValue = "0." + objectProps.brightness;
        filter = applyFilterOnImage(
          { brightness: parseFloat(brightnessValue) },
          "Brightness"
        );
      }
    }
    activeObject.filters[0] = filter;
    activeObject.applyFilters();
    canvas.renderAll();
  };

  const applyStyle = (objectProps) => {
    if (objectProps) {
      const styles = {
        absolutePositioned: objectProps.absolutePositioned,
        dirty: objectProps.dirty,
        borderColor: objectProps.borderColor,
        strokeColor: objectProps.strokeColor,
        shadowColor: objectProps.shadowColor,
      };

      const activeObject = canvas?.getActiveObject();
      if (activeObject) {
        applyFilter(activeObject.type, activeObject, objectProps);
        delete objectProps.brightness;
        delete objectProps.blur;
        activeObject.set(styles);
        canvas.renderAll();
      }
    }
  };

  useEffect(() => {
    applyStyle(imageProps);
  }, [imageProps]);

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <div>
        <h3>Upload Image to Canvas</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            overflowY: "scroll",
            height: "400px",
          }}
        >
          {state.image.map((image) => (
            <img
              crossOrigin="Anonymous"
              onClick={() => handleSetImageUrl(image.urls.small)}
              src={image.urls.small}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                maxHeight: "400px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: "12px" }}>
          <input
            onChange={handleImageUpload}
            accept="image/*"
            type="file"
            placeholder="Upload your image"
          />
          <button style={{ marginTop: "12px", float: "right" }}>Upload</button>
        </div>
      </div>
      <Canvas
        objectType="Image"
        canvas={canvas}
        isButtonVisible={false}
        imageUrl={state.imageUrl}
        handleGroupCanvas={handleGroupCanvas}
        activeObject={activeObject}
      />
    </>
  );
};

export default UploadImage;
