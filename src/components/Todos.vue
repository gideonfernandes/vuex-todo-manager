<template>
  <div>
    <h3>Tarefas</h3>
    <div class="legend">
      <span>Clique duas vezes para marcar a tarefa como finalizada</span>
      <span>
        <span class="incomplete-box"></span> Não Finalizada
      </span>
      <span>
        <span class="complete-box"></span> Finalizada
      </span>
    </div>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        @dblclick="handleOnDblClick(todo)"
        class="todo"
        v-bind:class="{'is-complete':todo.completed}"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Todos',
    computed: mapGetters(['allTodos']),
    methods: {
      ...mapActions(['loadTodos', 'deleteTodo', 'updateTodo']),
      handleOnDblClick(todo) {
        const updatedTodo = {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        }

        this.updateTodo(updatedTodo);
      }
    },
    created() {
      this.loadTodos();
    }
  }
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid #ccc;
    background: #41B883;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .is-complete {
    background: #35495E;
    color: #FFF;
  }

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #FFF;
    cursor: pointer;
  }

  .legend {
    display: flex;
    justify-content: flex-end;
    margin: -2rem 0 2rem 0;
  }

  .legend > span:nth-of-type(1){
    margin-right: 4rem;
  }

  .legend > span + span {
    margin: 0 0.5rem;
  }

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495E;
  }

  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41B883;
  }

  @media (max-width: 768px) {
    .todos {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>
