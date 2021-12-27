<template>
  <v-card>
    <v-card-title> V Card Sample feature test </v-card-title>
    <v-card-text>
      <v-textarea v-model="result" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="onclick"> button </v-btn>
      <v-btn @click="onclickRouter"> buttonRouter </v-btn>
      <v-btn @click="onclickMoment"> moment </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn @click="onclickDialog"> dialog </v-btn>
      <v-btn @click="onclickNoti"> notification </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      result: 'result',
    }
  },
  methods: {
    async onclick() {
      const r = await this.$axios.get('/api')
      this.result = r.data
    },
    async onclickRouter() {
      const r = await this.$axios.get('/api/hello')
      this.result = r.data
    },
    onclickMoment() {
      this.result = this.$moment().toLocaleString()
    },
    async onclickDialog() {
      const res = await this.$dialog.confirm({
        text: 'Do you really want to exit?',
        title: 'Warning',
      })
      this.result = res
    },
    async onclickNoti() {
      const res = this.$dialog.notify.info('Test notification', {
        position: 'top-right',
        timeout: 5000,
      })
      this.result = res
    },
  },
}

//            this.$dialog.notify.info('Test notification', {
// position: 'top-right',
// timeout: 5000
// })
</script>
