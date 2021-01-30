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
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo)
      this.newItem = "";
    },
      deleteBtn: function(index) {
        if(confirm('削除してもよろしいですか？'));
        this.todos.splice(index, 1)
      }
    }
})