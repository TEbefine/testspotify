// LayoutTrack.js
const CLIENT_ID = "5d352c4605744476abb5d62e9cb7a3a8";
const CLIENT_SECRET = "4543789c71564d6cb838da205541151f";

export const authenticateSpotify = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

export const searchTracks = async (query, accessToken) => {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );

  const data = await response.json();
  return data.tracks.items;
};

/*const CLIENT_ID = "5d352c4605744476abb5d62e9cb7a3a8";
const CLIENT_SECRET = "4543789c71564d6cb838da205541151f";

const authenticateSpotify = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

const accessToken = await authenticateSpotify();

const searchTracks = async (query) => {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );

  const data = await response.json();
  return data.tracks.items;
};*/
