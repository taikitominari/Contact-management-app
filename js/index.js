const vm = new Vue ({
  el: '#app',
  data() {
    return {
      message: 'Hello Vue.js'
    }
  },
  methods: {
    clickLog(event) {
      console.log(event)
      console.log(this.message)
    },
    hoverLog() {
      console.log('hover')
    }
  }
 })

window.vm = vm