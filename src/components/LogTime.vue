<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-md-6">
        <label for="">日期</label>
        <input type="date" class="form-control" placeholder="Date" v-model="date"/>
      </div>
      <div class="col-md-6">
        <label for="">时间</label>
        <input type="number" class="form-control" placeholder="Hours" v-model="totalTime"/>
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-12">
        <label for="">备注</label>
        <input type="text" class="form-control" placeholder="comment" v-model="comment"/>
      </div>
    </div>

    <button class="btn btn-primary" @click="save">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: '',
        totalTime: '',
        comment: ''
      }
    },
    methods: {
      save() {
        const plan = {
          name: 'jessie',
          image: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
          date: this.date,
          totalTime: this.totalTime,
          comment: this.comment
        }
        this.$store.dispatch('savePlan',plan)
        this.$store.dispatch('addTotalTime',this.totalTime)
        this.$router.go(-1)
      }
    }

  }
</script>
