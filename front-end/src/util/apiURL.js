export const apiURL = () => {
	return window.location.hostname === "localhost"
		? "http://localhost:3333"
		: "https://chef-app-4.herokuapp.com";
};
