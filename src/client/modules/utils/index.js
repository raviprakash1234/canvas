import { fabric } from "fabric";

export const createCanvas = (ref, props) => {
  return new fabric.Canvas(ref, props);
};

export const simpleFabric = (fabricType, firstArgument, props) => {
  const secondArgument = {
    left: Math.random() * 200,
    top: Math.random() * 250,
    ...props,
  };

  const object = new fabric[fabricType](
    firstArgument ? firstArgument : secondArgument,
    firstArgument && secondArgument
  );
  return object;
};

export const loadSVGUrl = (url, callBack) => {
  fabric.loadSVGFromURL(url, (objects, options) => {
    callBack(objects);
  });
};

export const loadSVGFromString = (svgString, callBack) => {
  fabric.loadSVGFromString(svgString, (objects, options) => {
    const svgObjects = fabric.util.groupSVGElements(objects, options);
    callBack(svgObjects);
  });
};

// export const animateObject = (obj, callBack) => {
//   callBack(obj);
// };

export const addSVGFromURL = (url, canvas, onCompleteCallback, isAnimate) => {
  fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.objectCaching = false;
  const minScale = 1;
  const maxScale = 2;
  fabric.loadSVGFromURL(url, (objects, options) => {
    const obj = fabric.util.groupSVGElements(objects, options);
    obj.set({
      left: 80,
      top: 90,
      angle: -30,
      direction: 1,
      shadow: { color: "rgba(0,0,0,0.3)" },
    });

    obj.animate(
      { angle: 30 },
      {
        duration: 2000,
        easing: fabric.util.ease.easeOutCubic,
        onChange: canvas.renderAndResetBound,
        onComplete: function onComplete() {
          obj.animate(
            {
              angle: Math.round(obj.angle) === 30 ? -30 : 30,
            },
            {
              duration: 2000,
              onComplete: onComplete,
            }
          );
        },
      }
    );

    const animate = (dir) => {
      const options = {
        easing: fabric.util.ease.easeOutCubic,
        duration: 1000,
      };

      obj.animate(
        {
          scaleX: dir ? maxScale : minScale,
          scaleY: dir ? maxScale : minScale,
        },
        options
      );

      obj.animate(
        {
          "shadow.offsetX": dir ? 20 : 0.00001,
          "shadow.offsetY": dir ? 20 : 0.00001,
        },
        options
      );

      obj.animate(
        { "shadow.blur": dir ? 20 : 0 },
        fabric.util.object.extend(
          {
            onChange: canvas.renderAndResetBound,
            onComplete: function () {
              obj.direction = !obj.direction;
              animate(obj.direction);
            },
          },
          options
        )
      );
    };
    animate(true);
    if (onCompleteCallback && typeof onCompleteCallback === "function") {
      onCompleteCallback(obj);
    }
  });
};

export const fromFabricUrl = (fabricType, imgLink, callBack) => {
  fabric[fabricType].fromURL(
    imgLink,
    (oImg) => {
      oImg.scale(0.5).set("flipX", true);
      oImg.set({
        scaleX: 0.5,
        scaleY: 0.5,
        flipX: true,
        left: Math.random() * 200,
        top: Math.random() * 400,
      });
      if (callBack && typeof callBack === "function") {
        callBack(oImg);
      }
    },
    { crossOrigin: "Anonymous" }
  );
};

export const drawingBrush = (canvasDrawingMode, newCanvas) => {
  let brush;
  switch (canvasDrawingMode) {
    case "Pattern":
      brush = new fabric.PatternBrush(newCanvas);
      break;
    case "Spray":
      brush = new fabric.SprayBrush(newCanvas);
      break;
    case "Pencil":
      brush = new fabric.PencilBrush(newCanvas);
      break;
    case "Circle":
      brush = new fabric.CircleBrush(newCanvas);
      brush.radius = 3;
      break;
    default:
      brush = new fabric.PencilBrush(newCanvas);
  }

  let ctx = newCanvas.getContext("2d");
  ctx.clearRect(0, 0, 800, 600);
  return brush;
};

export const createCanvasGroup = (group) => {
  return new fabric.Group(group);
};

export const setBackgroundImage = (imgLink, callBack) => {
  fabric.Image.fromURL(
    imgLink,
    (img, isError) => {
      callBack(img);
    },
    {
      crossOrigin: "anonymous",
    }
  );
};

export const applyFilterOnImage = (value = {}, type) => {
  const filter = new fabric.Image.filters[type]({
    ...value,
  });
  return filter;
};

export const createCropRect = (e) => {
  var i = new fabric.Rect({
    id: "crop-rect",
    top: e.top,
    left: e.left,
    angle: e.angle,
    width: e.getScaledWidth(),
    height: e.getScaledHeight(),
    stroke: "rgb(42, 67, 101)",
    strokeWidth: 2,
    strokeDashArray: [5, 5],
    fill: "rgba(255, 255, 255, 1)",
    globalCompositeOperation: "overlay",
    lockRotation: true,
  });
  return i;
};

export const createOverlayRect = (e) => {
  var a = new fabric.Rect({
    id: "overlay-rect",
    top: e.top,
    left: e.left,
    angle: e.angle,
    width: e.getScaledWidth(),
    height: e.getScaledHeight(),
    selectable: !1,
    selection: !1,
    fill: "rgba(0, 0, 0, 0.5)",
    lockRotation: true,
  });
  return a;
};

const cropImage = (i, e, canvas) => {
  canvas.remove(i);
  const s = (i.left - e.left) / e.scaleX,
    o = (i.top - e.top) / e.scaleY,
    c = (i.width * i.scaleX) / e.scaleX,
    l = (i.height * i.scaleY) / e.scaleY;

  e.set({
    cropX: s,
    cropY: o,
    width: c,
    height: l,
    top: e.top + o * e.scaleY,
    left: e.left + s * e.scaleX,
    selectable: true,
    cropped: 1,
  });
  canvas.renderAll();
};

export const prepareCrop = (e, canvas) => {
  const i = createCropRect(e);
  const a = createOverlayRect(e);
  const s = e.cropX,
    o = e.cropY,
    c = e.width,
    l = e.height;
  e.set({
    cropX: null,
    cropY: null,
    left: e.left - s * e.scaleX,
    top: e.top - o * e.scaleY,
    width: e._originalElement.naturalWidth,
    height: e._originalElement.naturalHeight,
    dirty: false,
  });
  i.set({
    left: e.left + s * e.scaleX,
    top: e.top + o * e.scaleY,
    width: c * e.scaleX,
    height: l * e.scaleY,
    dirty: false,
  });
  a.set({
    left: e.left,
    top: e.top,
    width: e.width * e.scaleX,
    height: e.height * e.scaleY,
    dirty: false,
  });
  i.oldScaleX = i.scaleX;
  i.oldScaleY = i.scaleY;

  canvas.add(a);
  canvas.add(i);
  canvas.discardActiveObject();
  canvas.setActiveObject(i);
  canvas.renderAll();

  i.on("moving", () => {
    (i.top < e.top || i.left < e.left) &&
      (i.left = i.left < e.left ? e.left : i.left)(
        (i.top = i.top < e.top ? e.top : i.top)
      )(
        i.top + i.getScaledHeight() > e.top + e.getScaledHeight() ||
          i.left + i.getScaledWidth() > e.left + e.getScaledWidth()
      ) &&
      (i.top =
        i.top + i.getScaledHeight() > e.top + e.getScaledHeight()
          ? e.top + e.getScaledHeight() - i.getScaledHeight()
          : i.top)(
        (i.left =
          i.left + i.getScaledWidth() > e.left + e.getScaledWidth()
            ? e.left + e.getScaledWidth() - i.getScaledWidth()
            : i.left)
      );
  });
  i.on("scaling", () => {});
  i.on("deselected", () => {
    cropImage(i, e, canvas);
    canvas.remove(a);
  });
};

export const eraser = (canvas) => {
  const eraser = new fabric.PencilBrush(canvas);
  return eraser;
};
