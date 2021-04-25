<template>
  <section role="link" class="document">
    <button class="document_download" @click="getDocument">
      <img
        src="../../assets/pdf.svg"
        alt="Документ типа PDF"
        width="48"
        height="48"
      />
    </button>
    <span class="document-name"
      >{{ document.doc_name }} от {{ document.date_doc }}</span
    >
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Document",
  emits: ["openingDoc", "openedDoc"],
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      loadDocument: "user/loadDocument",
    }),
    getDocument() {
      this.$emit("openingDoc");
      this.loadDocument({
        id_document: this.document.id_document,
        doc_type: this.document.doc_type,
      }).finally(() => this.$emit("openedDoc"));
    },
  },
};
</script>

<style scoped>
.document {
  display: flex;
  align-items: center;
}

.document_download {
  background: transparent;
  border: none;
  cursor: pointer;
}

.document-name {
  font-size: 0.875rem;
  color: var(--gray);
}
</style>
