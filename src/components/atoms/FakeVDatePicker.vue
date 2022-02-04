<template>
  <div>
    <input
      type="datetime-local"
      id="meeting-time"
      :value="dateToady"
      @input="(event) => $emit('update', event.target.value)"
    />
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "FakeVDatePicker",
  setup() {
    const dateToady = computed(() => {
      const date = new Date();
      const formatedDate =
        date.getFullYear() +
        "-" +
        ("00" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" + date.getDate()).slice(-2) +
        "T" +
        ("00" + date.getHours()).slice(-2) +
        ":" +
        ("00" + date.getMinutes()).slice(-2);

      return formatedDate;
    });

    return { dateToady };
  },
};
</script>

<style scoped>
input {
  background: whitesmoke;
  width: 100%;
  padding: 13px 15px;
  padding-top: 18px;
  border-radius: 3px;
  border-bottom: 1px solid #999;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  color: #6f6f6f;
}
</style>
