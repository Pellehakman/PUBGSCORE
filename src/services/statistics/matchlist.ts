import { getAuth } from "firebase/auth";

class Matchlist {
  state: any;
  async GetMatchlist(ign: string) {
    const auth = getAuth();
    if (sessionStorage.getItem("_matches")) {
      console.log("NO API REQUEST MADE");
    } else if (auth.currentUser) {
      console.log("API REQUEST MADE");
      const player = `players?filter[playerNames]=${ign}`;
      const player_url = `${player}`;
      await fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
      })
        .then((response) => response.json())
        .then(async (response) => {
          this.state = await response;

          sessionStorage.setItem(
            "_matches",
            JSON.stringify(response.data[0].relationships.matches.data)
          );
          console.log(this.state);
        });
    }
  }
}

const $matchlist = new Matchlist();
export default $matchlist;
