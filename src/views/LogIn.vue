<template>
  <div class="sign-in" id="sign-in">
    <log-in-form class="sign-in__form" @submit="signin" />
    <SignInBanner class="sign-in__banner" />
  </div>
</template>

<script lang="ts">
import SignInBanner from "../components/atoms/SignInBanner.vue";
import LogInForm from "../components/atoms/LogInForm.vue";
import { useStore } from "vuex";

export default {
  name: "SignIn",
  components: { SignInBanner, LogInForm },
  setup() {
    const store = useStore();
    const signin = (form) => {
      store.dispatch("setAuth", form.value);
    };
    return { signin };
  },
};
</script>

<style scoped>
#sign-in {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
}

.sign-in__form {
  flex: 1.25;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
}

.sign-in__banner {
  flex: 1.75;
}
</style>
