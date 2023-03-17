import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import $fireAccount from "@/services/account/fireAccount";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "go-pro",
  components: { PlayerName },
  setup() {
    const pubgError = ref("");

    const handleError = (fromError: string) => {
      pubgError.value = fromError;
    };

    const handleSerach = () => {
      console.log("search");
    };

    const handleGuest = () => {
      $fireAccount.LoginGuest();
    };

    return {
      handleGuest,
      pubgError,
      handleSerach,
      handleError,
    };
  },
});
