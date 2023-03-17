import $apiAccount from "@/services/account/apiAccount";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: { edit: Boolean, editStyle: Boolean },
  emits: ["onError", "onLoading"],

  setup(props, { emit }) {
    const loading = ref(false);
    const playerName = ref<any | string>("");
    const error = ref<string>("");
    const ifDisable = ref(false);
    const isGuest = ref(true);
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        isGuest.value = false;
      }
    });
    const handlePlayerName = async () => {
      loading.value = true;
      if (playerName.value.length <= 0) {
        error.value = "Please search for player";
        console.log(error.value);
      } else {
        await $apiAccount.GetPlayer(playerName.value, isGuest.value);
        ifDisable.value = true;
      }

      loading.value = false;
      emit("onLoading", loading.value);
      emit("onError", error.value);
    };

    return {
      props,
      playerName,
      handlePlayerName,
      loading,
      error,
    };
  },
});
