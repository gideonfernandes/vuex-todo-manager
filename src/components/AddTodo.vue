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
    flex: 10;
    padding: 10px;
    border: 1px solid #41B883;
    outline: 0;
  }

  input[type=submit] {
    flex: 2;
    background: #41B883;
    color: #FFF;
    border: 1px solid #41B883;
    cursor: pointer;
  }
</style>
