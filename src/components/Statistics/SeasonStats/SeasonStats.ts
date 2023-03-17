import $seasons from "@/services/seasons/seasons";
import type { seasonStats } from "@/models/models";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SeasonStats",
  setup() {
    const normal = ref();
    const ranked = ref();
    const seasonData = ref();
    const seasonStats = ref();

    const auth = getAuth();
    const loading = ref(false);
    const playerName = ref<any | undefined>("LOADING...");

    const getPlayerNameFromAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        console.log(user);
        if (user === null) {
          playerName.value = "NO PLAYER";
        } else {
          const ign_id: any = user?.displayName;
          playerName.value = user?.photoURL;
          handleMatches(ign_id);
        }
      });
    };
    const update = ref(false);
    const handleUpdate = () => {
      update.value = true;
      getPlayerNameFromAuth();
    };

    const handleMatches = async (ign_id: string) => {
      loading.value = true;
      if (update.value === true) {
        await $seasons.GetSeasonsStats(ign_id);
      }
      if (sessionStorage.getItem("_user_season_stats_normal")) {
        // console.log("no req");
      } else {
        await $seasons.GetSeasonsStats(ign_id);
        loading.value = false;
      }

      nextStep();
    };
    const nextStep = async () => {
      loading.value = true;
      if (!auth.currentUser) {
        seasonStats.value = "please enter user to see matches";
      }
      if (sessionStorage.getItem("_user_season_stats_normal")) {
        normal.value = sessionStorage.getItem("_user_season_stats_normal");
      }
      if (sessionStorage.getItem("_user_season_stats_ranked")) {
        ranked.value = sessionStorage.getItem("_user_season_stats_ranked");
      } else {
        normal.value = await $seasons.normal;
        ranked.value = await $seasons.normal;
      }
      calculateStats();
      loading.value = false;
    };
    const calculateStats = () => {
      const normalData: seasonStats = JSON.parse(normal.value);
      const rankedData: seasonStats = JSON.parse(ranked.value);

      const normalSoloFPP = Object.entries(normalData["solo-fpp"]);
      const normalDuoFPP = Object.entries(normalData["duo-fpp"]);
      const normalSquadFPP = Object.entries(normalData["squad-fpp"]);
      const normalSoloTPP = Object.entries(normalData["solo"]);
      const normalDuoTPP = Object.entries(normalData["duo"]);
      const normalSquadTPP = Object.entries(normalData["squad"]);
      const rankedSquadFPP = Object.entries(rankedData["squad-fpp"]);

      const seasonStatsCollection = [
        ...normalSoloFPP,
        ...normalDuoFPP,
        ...normalSquadFPP,
        ...normalSoloTPP,
        ...normalDuoTPP,
        ...normalSquadTPP,
        ...rankedSquadFPP,
      ];
      const wins = seasonStatsCollection
        .filter((name) => name.includes("wins"))
        .map((f) => f[1])
        .reduce((a, b) => a + b, 0);

      const kills = seasonStatsCollection
        .filter((name) => name.includes("kills"))
        .map((f) => f[1])
        .reduce((a, b) => a + b, 0);

      const assists = seasonStatsCollection
        .filter((name) => name.includes("assists"))
        .map((f) => f[1])
        .reduce((a, b) => a + b, 0);

      const damageDealt = seasonStatsCollection
        .filter((name) => name.includes("damageDealt"))
        .map((f) => f[1])
        .reduce((a, b) => a + b, 0);

      const roundsPlayed = seasonStatsCollection
        .filter((name) => name.includes("roundsPlayed"))
        .map((f) => f[1])
        .reduce((a, b) => a + b, 0);

      const losses = seasonStatsCollection
        .filter((name) => name.includes("losses"))
        .map((f) => f[1])
        .reduce((a, b) => a + b, 0);

      const data = {
        wins: wins,
        kills: kills,
        assists: assists,
        damageDealt: Math.round(damageDealt),
        roundsPlayed: roundsPlayed,
        losses: losses,
      };

      seasonData.value = data;
    };

    getPlayerNameFromAuth();
    return {
      handleUpdate,
      playerName,
      normal,
      seasonData,
      getPlayerNameFromAuth,
      loading,
      seasonStats,
    };
  },
});
