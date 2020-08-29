import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async loadTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=60');

    commit('setTodos', response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );
    
    commit('addTodoSuccess', response.data);
  },

  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
      updatedTodo,
    );

    commit('updateTodoSuccess', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('deleteTodoSuccess', id);
  },

  async filterTodos({ commit }, event) {
    // Get selected number
    const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);

    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

    commit('setTodos', response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodoSuccess: (state, todo) => state.todos.unshift(todo),
  updateTodoSuccess: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  deleteTodoSuccess: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
  state,
  getters,
  actions,
  mutations
};
