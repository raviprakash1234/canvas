const getImage = (query = "") => {
  const secretKey = "TN1WAYiZResnZlM2CS4s3Hp3feRnLHJdbU7wKdg9zZI";
  return fetch(
    `https://api.unsplash.com/photos?page=1&query=${query}&client_id=${secretKey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
      return response.json();
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
  getImage,
};

export default services;
