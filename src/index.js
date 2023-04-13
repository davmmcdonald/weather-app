const successCallback = (position) => {
	console.log(position);
};
  
const errorCallback = (error) => {
	console.log(error);
};
  
window.navigator.geolocation.getCurrentPosition(successCallback, errorCallback);