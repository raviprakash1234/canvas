import { fabric } from "fabric";

const SolarSystem = ({ canvas = null }) => {
  const handleAddSolarSystem = () => {
    fabric.Object.prototype.originX = fabric.Object.prototype.originY =
      "center";

    canvas.set({
      backgroundColor: "black",
    });

    fabric.Image.fromURL("./assets/sun.png", (sunImg) => {
      sunImg.set({
        width: 100,
        height: 100,
      });
      canvas.add(sunImg);
      sunImg.center();
    });

    var planetSize = 26,
      totalPlanets = 12,
      rotationSpeed = 20000,
      orbits = [],
      planets = [],
      planetNames = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Ceres",
        "Pluto",
        "Haumea",
        "Eris",
      ];

    var hoverCircle = new fabric.Circle({
      radius: 13,
      fill: "#000",
      stroke: "rgb(0,192,255)",
      strokeWidth: 3,
      left: -100,
      top: -100,
    });

    var planetLabel = new fabric.Text("", {
      fill: "#fff",
      fontSize: 16,
      fontFamily: "Open Sans",
      textBackgroundColor: "#002244",
    });

    new fabric.Image.fromURL("./assets/planet.png", (planetsImg) => {
      var tempCanvas = new fabric.StaticCanvas();
      tempCanvas.setDimensions({
        width: planetSize,
        height: planetSize,
      });
      planetsImg.originX = "left";
      planetsImg.originY = "top";
      tempCanvas.add(planetsImg);

      for (var i = 0; i < totalPlanets; i++) {
        createOrbit(i);
      }
      canvas?.add(hoverCircle);

      for (var i = 0; i < totalPlanets; i++) {
        createPlanet(i, planetsImg, tempCanvas);
      }
      canvas?.add(planetLabel);
    });

    const createOrbit = (i) => {
      var orbit = new fabric.Circle({
        radius: 26 * i + 90,
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        fill: "",
        stroke: "rgba(0,192,255,0.5)",
        hasBorders: false,
        hasControls: false,
        lockMovementX: true,
        lockMovementY: true,
        index: i,
      });
      canvas?.add(orbit);
      orbits.push(orbit);
    };

    const createPlanet = (i, planetsImg, tempCanvas) => {
      // console.log("planetsImg", planetsImg);
      planetsImg.left = -planetSize * i;
      planetsImg.setCoords();
      tempCanvas.renderAll();

      var img = new Image();
      // console.log("img", img);
      img.onload = () => {
        var oImg = new fabric.Image(img, {
          name: planetNames[i],
          index: i,
          scaleX: 1 / canvas.getRetinaScaling(),
          scaleY: 1 / canvas.getRetinaScaling(),
          left: canvas.getWidth() / 2 - 90 - planetSize * i,
          top: canvas.getHeight() / 2,

          hasBorders: false,
          hasControls: false,
        });
        canvas.add(oImg);
        planets.push(oImg);
        animatePlanet(oImg, i);
      };
      img.src = tempCanvas.toDataURL();
    };

    const animatePlanet = (oImg, planetIndex) => {
      var radius = planetIndex * 26 + 90,
        cx = canvas.getWidth() / 2,
        cy = canvas.getHeight() / 2,
        duration = (planetIndex + 1) * rotationSpeed,
        startAngle = fabric.util.getRandomInt(-180, 0),
        endAngle = startAngle + 359;

      const animate = () => {
        fabric.util.animate({
          startValue: startAngle,
          endValue: endAngle,
          duration: duration,

          // linear movement
          easing: (t, b, c, d) => {
            return (c * t) / d + b;
          },

          onChange: (angle) => {
            angle = fabric.util.degreesToRadians(angle);

            var x = cx + radius * Math.cos(angle);
            var y = cy + radius * Math.sin(angle);

            oImg.set({ left: x, top: y }).setCoords();

            // only render once
            if (planetIndex === totalPlanets - 1) {
              canvas.renderAll();
            }
          },
          onComplete: animate,
        });
      };
      animate();
    };

    var hoverTarget, prevHoverTarget;

    canvas?.on("mouse:over", (options) => {
      hoverTarget = options.target;
    });

    canvas?.on("mouse:out", (options) => {
      hoverTarget = null;
      prevHoverTarget = options.target;
    });

    canvas?.on("after:render", () => {
      orbits.forEach((orbit) => {
        orbit.strokeWidth = 1;
        orbit.stroke = "rgba(0,192,255,0.5)";
      });
      if (hoverTarget && !hoverTarget.text && hoverTarget.index) {
        var hoveredPlanet = planets[hoverTarget.index];
        var hoveredOrbit = orbits[hoveredPlanet.index];

        hoveredOrbit.set({
          strokeWidth: 3,
          stroke: "rgb(0,192,255)",
        });

        hoverCircle.set({
          left: hoveredPlanet.left,
          top: hoveredPlanet.top,
        });

        planetLabel.set({
          left: hoveredPlanet.left + 50,
          top: hoveredPlanet.top + 20,
          text: hoveredPlanet.name,
        });
      } else {
        hoverCircle.set({ left: -100, top: -100 });
        planetLabel.set({ left: -100, top: -100 });
      }
    });
  };

  return (
    <>
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
        onClick={handleAddSolarSystem}
      >
        Show Solar System
      </button>
    </>
  );
};

export default SolarSystem;
