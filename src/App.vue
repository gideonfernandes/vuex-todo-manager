<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos.vue';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
body {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #35495E;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
