<template>
  <div class="add container fix-top">
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">添加用户</h1>
    <Alert v-if="alert" :message="alert"></Alert>
    <form @submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea rows="10" class="form-control" placeholder="profile" v-model="customer.profile"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'

export default {
  name: 'customers-add',
  data () {
    return {
      customer:{},
      alert:""
    }
  },
  methods:{
    addCustomer(e){
      e.preventDefault();
      if(!this.customer.name || !this.customer.phone || !this.customer.email){
        this.alert="请添加对应的信息！";
      }else{
        axios.post("http://localhost:3000/users/",this.customer)
        .then((response)=>{
          //console.log(response.data);
          this.$router.push({path: '/',query:{alert:"用户信息添加成功！"}});
        })
      }
      
    }
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
