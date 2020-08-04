//  https://developer.spotify.com/
//  documentation/web-playback-sdk/quick-start///#

export const authEndpoint = "https://accounts.spotify.com/authorize"; //send user to spotify.com login

const redirectUri = "http://localhost:3000/"; //after login redirects to our localhost

const clientId = "cc0c7dc595294396b9a87d313ab500de"; //the client id we got from dashboard of spotify developer

//scopes are the thing we can see/get from/on spotify
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//to pull out the access token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//%20 is the sign for space in loginURL

// export const authEndpoint = "https://accounts.spotify.com/authorize";
// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = "cff76213089a4e228206c8bf120d67cb";
// const redirectUri = "http://localhost:3000/";
// const scopes = [
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
// ];

// export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;
