<template>
  <article class="login">
    <form class="login__form login-form">
      <h2 class="login-header">Вход в личный кабинет</h2>
      <h4 class="login-hint" id="login-hint">
        Используйте логин пароль из памятки
      </h4>
      <input
        v-model="login"
        class="login-input"
        type="text"
        placeholder="Логин"
        name="eco_password"
        aria-describedby="login-hint"
        required
      />
      <input
        v-model="password"
        class="login-input"
        type="password"
        placeholder="Пароль"
        name="eco_password"
        aria-describedby="login-hint"
        required
      />

      <input
        class="login-submit"
        type="submit"
        value="Войти"
        @click.prevent="authorizeUser"
      />
    </form>
  </article>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      loginUser: "user/loginUser",
      getTestData: "user/getTestData",
    }),
    authorizeUser() {
      this.loginUser({
        login: this.login,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: calc(100vh - 5.125em);
  display: flex;
}

.login__form {
  margin: auto;
}
.login-form {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;

  width: 17.5em;

  text-align: center;
}

.login-header {
  font-size: 1.875rem;
  margin: 0 0 0.33em;
  line-height: 1.1;

  color: var(--gray);
}

.login-hint {
  font-size: 1.125rem;
  margin: 0 0 0.33em;
  font-weight: normal;

  color: var(--gray);
}

.login-input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.428em 0.857em;
  font-size: 0.875rem;
  border: 1px solid var(--light-gray);
  color: var(--gray);
  margin: 0 0 0.625em;
}
.login-input:focus {
  outline: 1px solid var(--green);
}

.login-submit {
  box-sizing: border-box;
  padding: 1.428em 2.857em;
  margin-top: 0.714em;

  font-size: 0.875rem;
  color: var(--white);
  background: var(--gray-blue);
  text-transform: uppercase;

  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color ease-in 0.1s;
}

.login-submit:hover,
.login-submit:focus {
  background: var(--green);
  outline: none;
  transition: background-color ease-out 0.1s;
}
</style>
