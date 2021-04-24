<template>
  <BaseHeader />
  <main>
    <component :is="(isAuth) ? 'Account' : 'Welcome'" />
  </main>
  <BaseFooter />
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import Welcome from "@/pages/Welcome.vue";
import Account from "@/pages/Account.vue";
import { mapActions } from 'vuex'

export default {
  name: "App",
  components: {
    BaseHeader,
    BaseFooter,
    Welcome,
    Account
  },
  beforeMount() {
    this.loginUser()
  },
  computed: {
    isAuth() {
      return localStorage.getItem('auth')
    }
  },
  methods: {
    ...mapActions({
      loginUser: 'login/loginUser'
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
