<template>
  <header class="header">
    <img
      src="../assets/logo.png"
      alt="Логотип группы компаний Эко Безопасность"
    />
    <span class="header__login header-login" v-if="user">
      Ваш логин: {{ user.id_login }}</span
    >
    <button class="header__exit-btn exit-btn" v-if="user" @click="logout">
      Выход
    </button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "BaseHeader",
  computed: {
    ...mapGetters({
      user: "user/user",
    }),
  },
  methods: {
    ...mapMutations({
      logout: "user/LOGOUT",
    }),
  },
};
</script>

<style scoped>
.header {
  height: 5.125em;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: var(--white);
  z-index: 2;

  padding: 0.3125em 0.9375em;
}

@media (max-width: 1200px) {
  .header img {
    width: 7.5em;
  }
}

.header__login {
  margin-left: auto;
}

.header-login,
.exit-btn {
  color: var(--gray);
  font-size: 0.875rem;
  padding: 0 1.07em;
  vertical-align: center;
}

.exit-btn {
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
}
.exit-btn:hover {
  color: var(--black);
}
</style>
