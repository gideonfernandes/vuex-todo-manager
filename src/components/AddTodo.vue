<template>
  <div>
    <h3>Adicionar tarefa</h3>
    <div class="add">
      <form @submit="handleOnSubmit">
        <input type="text" v-model="title" placeholder="Adicionar tarefa..." />
        <input type="submit" value="Adicionar" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    handleOnSubmit(event) {
      event.preventDefault();

      this.addTodo(this.title);

      this.title = '';
    }
  }
};
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type=text] {
    flex: 9;
    padding: 10px;
    border: 1px solid #CCC;
    border-radius: 4px;
    outline: 0;
  }

  input[type=submit] {
    flex: 3;
    height: 40px;
    background: #41B883;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
</style>
