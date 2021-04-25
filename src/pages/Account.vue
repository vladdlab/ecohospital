<template>
  <div class="account">
    <section class="account-complaint">
      <button class="complaint-btn">Оставить жалобу</button>
    </section>
    <section class="documents" :class="{ documents_state_loading: loading }">
      <Document
        class="documents__item"
        v-for="document of documents"
        :key="document.id_document"
        :document="document"
        @openingDoc="loading = true"
        @openedDoc="loading = false"
      />

      <div class="lds-ring" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Document from "@/components/Account/Document";
export default {
  name: "Account",
  components: {
    Document,
  },
  data() {
    return {
      loading: false,
    };
  },
  beforeMount() {
    this.loading = true;
    this.getTestData(this.user).finally(() => (this.loading = false));
  },
  methods: {
    ...mapActions({
      getTestData: "user/getTestData",
    }),
  },
  computed: {
    ...mapGetters({
      user: "user/user",
      documents: "user/documents",
    }),
  },
};
</script>

<style scoped>
.account {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1200px) {
  .account {
    padding: 0 1em;
  }
}

.account > * {
  width: min(100%, 58.75em);
  margin: 0 auto;
  padding: 1.25em;
  box-sizing: border-box;

  border: 5px solid var(--dark-white);
  border-radius: 5px;

  display: flex;
}

.account-complaint {
  margin-bottom: 1em;

  justify-content: center;
}
.complaint-btn {
  font-size: 0.875rem;
  padding: 0.46em 0.857em;

  border-radius: 5px;
  border: none;

  background: var(--cyan);
  color: var(--white);
  cursor: pointer;
  transition: background-color ease 0.2s;
}
.complaint-btn:hover {
  background: var(--light-cyan);
}

.documents {
  flex-direction: column;
  min-height: 10em;
  position: relative;
}
.documents .documents__item + .documents__item {
  padding-top: 0.9375em;
  margin-top: 0.9375em;
  border-top: 1px solid #eaeaea;
}
.documents_state_loading::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(100, 100, 100, 0.1);
}

.lds-ring {
  position: absolute;
  width: 3em;
  height: 3em;
  top: calc(50% - 3em);
  left: calc(50% - 3em);
  z-index: 1;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 3em;
  height: 3em;
  margin: 8px;
  border: 8px solid var(--green);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--green) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
