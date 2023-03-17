//npm"https://api.pubg.com/shards/steam/seasons/lifetime/gameMode/duo/players?filter[playerIds]=account.c0e530e9b7244b358def282782f893af%2Caccount.82bad0072f31455d8d9f8d834da2f2f3&filter[gamepad]=true"
import type { Options } from "@/models/Options";

class Lifetime {
  state: any;
  async GetLifetime(form: Options) {
    // if (sessionStorage.getItem("_user_lifetime")) {
    //   console.log("NO API REQUEST MADE");
    // } else if (auth.currentUser) {
    // console.log("API REQUEST MADE");
    const lifetime_url = `players/${form.playerID}/seasons/lifetime`;

    await fetch(`${import.meta.env.VITE_API_URL}${lifetime_url}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: "application/vnd.api+json",
      },
    })
      .then((response) => response.json())
      .then(async (response) => {
        this.state = await response;
        // sessionStorage.setItem("_user_lifetime", JSON.stringify(response));
        console.log(this.state);
      });
    // }
  }
}

const $lifetime = new Lifetime();
export default $lifetime;
