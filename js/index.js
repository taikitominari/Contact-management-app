let app = new Vue({
  el: '#app',
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addBtn: function() {
      if(this.newItem == "") return;

      let todo = {
        item: this.newItem
      };

      this.todos.push(todo)
      this.newItem = "";
    }
  }
})