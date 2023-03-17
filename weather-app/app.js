const getUserLocation = async () => {
  "use strict";

  const getLocation = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        resolve({ userLatitude, userLongitude });
      },
      (error) => {
        console.log(error);
        reject(error);
      }
    );
  });
  return getLocation;
};

const getWeather = () => {
  "use strict";
};

const init = () => {
  "use strict";

  getUserLocation().then((result) => {
    console.log(result);
  });
};

window.onload = init;
