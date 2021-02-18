const vm = new Vue ({
  el: '#app',
  data() {
    return {
      numbers: [],
      total_num: 0
    }
  },
  // watchオプション
  watch: {
    number(value){
      this.total_num = 0
      this.number.forEach(number => {
        this.total_num += number
      })
    }
  }
})

window.vm = vm

// $メソッド
vm.$watch(function() {
  return this.message 
}, function (message) {
  console.log('変更後の値:' + message)
})