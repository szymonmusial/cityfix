<template>
  <select class="select" v-model="selectedOptions" @change="$emit('onSelect', selectedOptions)">
    <option disabled selected>{{ label }}</option>
    <option v-for="item in options" :key="item.name" :value="item.value">{{ item.name }}</option>
  </select>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
export default {
  name: "DropDown",
  props: {
    options: Array,
    label: String,
  },
  setup(props) {
    const selectedOptions = ref<undefined | string>(props.label);

    return { selectedOptions };
  },
};
</script>

<style>
.select {
  text-align: center;
  text-align-last: center;
  -moz-text-align-last: center;
  border: 1px solid;
  padding: 8px 24px;
  background-color: #25424c;
  color: white;
  border-radius: 8px;
  border: 0px;
  font-weight: 500;
}
</style>
