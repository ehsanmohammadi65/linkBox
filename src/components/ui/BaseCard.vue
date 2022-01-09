<template>
  <div :class="modeName" @mode="setMode">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modeName: "card",
    };
  },
  methods: {
    setMode(value) {
      this.modeName = value;
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(124, 9, 139);
  padding: 1rem;
  margin: 0rem auto;
  max-width: 95%;
  margin-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
}
.link {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0rem auto;
  margin-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
}
</style>
