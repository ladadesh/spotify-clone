import React, { useEffect } from "react";

import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./components/DataLayer";

const spotify = new SpotifyWebApi(); //this is use to link spotify api with react

function App() {
  // const [token, setToken] = useState("");
  const [{ user, token }, dispatch] = useDataLayerValue();
  //{user} = datalayer.user

  // useeffect run code as per given codition
  useEffect(() => {
    const hash = getTokenFromUrl();
    //for security reasons we're making the url blank
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      //to get the logged in user info
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    //in order to authorize the user we put the playlist id from original spotify.com
    spotify.getPlaylist("37i9dQZEVXcTKAxvzg7mEm").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

    console.log(spotify);

    // console.log("I have a token", _token);
  }, []);
  // console.log("person", user);
  // console.log("token", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
