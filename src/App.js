import React, { useEffect, useState } from 'react';
// import Login from './components/Login';
import LoginPage from './Pages/LoginPage';
// import Player from './components/Player';
import UserDashboard from './Pages/UserDashboard';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

  const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  // useEffect is used to run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

     

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })


      spotify.getPlaylist('37i9dQZEVXcLTP4J3V1vN3').then((response) => {  
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })

    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <UserDashboard 
            spotify = {spotify}
          />
        ) : (
          <LoginPage />
        )
      }
    </div>
  );
}

export default App;
