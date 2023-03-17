import AppFooter from "@/components/AppFooter/AppFooter.vue";
import MatchList from "@/components/Statistics/MatchList/MatchList.vue";
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import OptionBar from "@/components/Statistics/OptionBar/OptionBar.vue";
import PlayerStats from "@/components/Statistics/PlayerStats/PlayerStats.vue";
import SeasonStats from "@/components/Statistics/SeasonStats/SeasonStats.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "statistics-view",
  components: {
    // MenuBar,
    AppFooter,
    SeasonStats,
    OptionBar,
    PlayerStats,
    MatchList,
  },

  setup() {
    return {};
  },
});
