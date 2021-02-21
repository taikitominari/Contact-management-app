const UserForm = {
  template:`
    <div>
      <div>名前入力フォーム</div>
      <input v-model='user_name'>
      <button @click='update'>名前変更</button>
    </div>
  `,
  props: {
    userName: { type: String, required: true }
  },
  data() {
    return {
      user_name: this.userName
    }
  },
  methods: {
    update() {
      this.$emit('update:user-name', this.user_name)
    }
  }
}

const UserDetail = {
  components: {
    'user-form': UserForm
  },
  data() {
    return {
      user_name: '山田 太郎'
    }
  },
  template: `
    <div>
      <div>
        <span>ユーザー名: {{ user_name }}</span>
      </div>
      <div>
        <user-form :user-name='user_name' @update:user-name='user_name = $event'></user-form>
      </div>
    </div>
  `
}

const vm = new Vue({
  el: '#app',
  components: {
    'user-detail': UserDetail
  }
})

{/* <div>
<userform></userform>
</div> */}