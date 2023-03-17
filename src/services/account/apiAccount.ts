import type { playerModel } from "@/models/models";
import $fireAccount from "./fireAccount";

class ApiAccount {
  fetchPlayer: playerModel | undefined;
  error: string | undefined;

  get FetchPlayer() {
    return this.fetchPlayer;
  }
  get Error() {
    return this.error;
  }

  async GetPlayer(playerName: string, isGuest: boolean) {
    const player = `players?filter[playerNames]=${playerName}`;
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
        console.log(response);
        if (response.errors) {
          this.error = await response.errors[0].detail;
        } else {
          this.fetchPlayer = await response;
          this.error = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (isGuest === true) {
      $fireAccount.LoginGuest(this.fetchPlayer);

      console.log("lets make a guest");
    }
  }
}

const $apiAccount = new ApiAccount();
export default $apiAccount;
