import AppFooter from "@/components/AppFooter/AppFooter.vue";
import GoPro from "@/components/LandingSlides/GoPro/GoPro.vue";
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "home-view",
  components: { GoPro, AppFooter },

  setup() {
    return {};
  },
});
