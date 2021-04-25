<template>
  <div class="layout">
    <BaseHeader />
    <main>
      <component :is="user ? 'Account' : 'Welcome'" />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import Welcome from "@/pages/Welcome.vue";
import Account from "@/pages/Account.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Welcome,
    Account,
  },
  computed: {
    ...mapGetters({
      user: "user/user",
    }),
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
.layout {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
