<template>
  <div class="v-fake-select-wrapper">
    <div class="v-fake-select-main" @click="() => (isDropDownActive = true)">
      <v-text-field :label="currentLabel" disabled />
    </div>
    <div class="v-fake-select__dropdown" v-if="isDropDownActive">
      <div class="v-fake-select__dropdown__item" v-for="item in options" :key="item.id" @click="selectItem(item)">
        <v-text-field :label="item.name" disabled />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "FakeVSelect",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    options: Array,
    label: String,
    target: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isDropDownActive = ref(false);
    const selectedItemValue = ref(null);

    const selectItem = (item) => {
      selectedItemValue.value = item[props.target];
      isDropDownActive.value = false;
      emit("update:modelValue", selectedItemValue);
    };

    const currentLabel = computed(() => {
      if (selectedItemValue.value !== null) {
        return selectedItemValue.value;
      } else {
        return props.label;
      }
    });

    return { isDropDownActive, selectedItemValue, selectItem, currentLabel };
  },
};
</script>

<style scoped>
.v-input--disabled,
.v-input--disabled input {
  color: #6f6f6f;
}
</style>

<style>
.v-fake-select-wrapper .v-input__details {
  display: none !important;
}

.v-fake-select__dropdown__item .v-input--density-default {
  --v-input-control-height: 42px !important;
  border: 0.5px solid #bfbfbf;
}
</style>
