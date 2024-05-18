const getSvg = (query = "") => {
  return fetch(
    `
    http://fabricjs.com/assets/${query}.svg`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
      return response;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      return null;
    });
};

const services = {
  getSvg,
};

export default services;
