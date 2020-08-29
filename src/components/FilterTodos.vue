<template>
  <div>
    Filtrar Quantidade:
    <select @change="filterTodos($event)">
      <option value="60">60</option>
      <option value="30">30</option>
      <option value="18">18</option>
      <option value="12">12</option>
      <option value="6">6</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  methods: mapActions(['filterTodos'])
};
</script>

<style scoped>
  select {
    margin-top: 20px;
    padding: 6px;
    border: 1px solid #41B883;
  }
</style>
