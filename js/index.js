let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!!',
    url: 'https://jp.vuejs.org/index.html',
    toggle: true,
    languages: [
      'JavaScript',
      'Ruby',
      'Python'
    ]
  },

  methods: {
    change: function() {
      this.message = 'clicked!!!'
    }
  }
})