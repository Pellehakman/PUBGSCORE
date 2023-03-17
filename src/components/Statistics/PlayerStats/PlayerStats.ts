import Player from "@/components/Player/Player.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerStats",
  components: { Player },
  setup() {
    document.addEventListener("mousedown", function (event: any) {
      if (!event.target.closest("#playerSearchDropdown")) {
        playerDropdown.value = false;
      }
    });
    const playerDropdown = ref(false);
    const handlePlayerDropdown = () => {
      playerDropdown.value = !playerDropdown.value;
    };
    return { handlePlayerDropdown, playerDropdown };
  },
});
