import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Player",
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

    const playerSearch = ref("");

    return { handlePlayerDropdown, playerDropdown, playerSearch };
  },
});
