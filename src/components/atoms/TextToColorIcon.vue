<template>
  <div class="text-to-color-icon" v-html="createSquare"></div>
</template>

<script>
import useLeafMapIcon from "@/composables/LeafMapIcon/leafMapIcon";
import { LeafMapIcon } from "@/composables/LeafMapIcon/leafMapIconDictionary";
import { computed } from "@vue/runtime-core";

export default {
  name: "TextToColorSquare",
  props: {
    text: String,
  },
  setup(props) {
    const { stringToColour, iconStucture } = useLeafMapIcon();

    const createSquare = computed(() => {
      const color = stringToColour(props.text);
      return iconStucture(LeafMapIcon.mdiPin, color);
    });

    return { createSquare };
  },
};
</script>

<style scoped>
.text-to-color-square {
  display: block;
}
</style>
