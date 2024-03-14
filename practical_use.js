async function fetchData() {
    try {
      const key = "your steam key"
      const steamId = "your steam id";
      const response = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${steamId}&format=json`);
      const data = await response.json();
      console.log(data.response.game_count)
      // Handle data
    } catch (error) {
      console.error(error)
    }
  }

fetchData()