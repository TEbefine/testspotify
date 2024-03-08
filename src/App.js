// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import { searchTracks, authenticateSpotify } from "./LayoutTrack";

function App() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await authenticateSpotify();
      setAccessToken(token);
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    const results = await searchTracks(query, accessToken);
    console.log(results);
    setTracks(results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Test calls</h1>
      </header>
      <main>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search...</button>
        </div>
        <ul>
          {tracks.map((track) => (
            <li key={track.id}>
              {track.name} - {track.artists[0].name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

/*import "./App.css";
import React, { useState, useEffect } from "react";
import { searchTracks } from "../LayoutTrack";

function App() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  const handleSearch = async () => {
    const results = await searchTracks(query);
    setTracks(results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TEst calls</h1>
      </header>
      <main>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search...</button>
        </div>
        <ul>
          {tracks.map((track) => (
            <li key={track.id}>
              {track.name} - {track.artists[0].name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;*/
