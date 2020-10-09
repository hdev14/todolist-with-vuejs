const app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {
        id: 1,
        description: 'Aprenda VueJS',
        done: false
      }
    ]
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.push({
          id: this.todos.length + 1,
          description: this.newTodo,
          done: false
        })
      }
    },

    removeTodo(id) {
      const index = this.todos.findIndex(todo => todo.id === id)
      this.todos.splice(index, 1)
    }
  }
})
