import PlayerName from "@/components/PlayerName/PlayerName";
import $matchlist from "@/services/statistics/matchlist";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, onBeforeMount, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "PlayerStats",
  async setup() {
    const auth = getAuth();
    const loading = ref(false);
    const matchlist = ref();
    const matchlistError = ref("");

    const getPlayerNameFromAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        const ign: any = user?.photoURL;
        await handleMatches(ign);
      });
    };

    const handleMatches = async (ign: string) => {
      loading.value = true;
      await $matchlist.GetMatchlist(ign);
      loading.value = false;
      nextStep();
    };
    const nextStep = async () => {
      if (!auth.currentUser) {
        matchlistError.value = "please enter user to see matches";
      }
      if (sessionStorage.getItem("_matches")) {
        matchlist.value = sessionStorage.getItem("_matches");
        matchlistError.value = "";
      } else {
        matchlist.value = $matchlist.state;
      }
    };

    getPlayerNameFromAuth();
    return {
      loading,
      matchlist,
      matchlistError,
    };
  },
});
