<template>
  <div class="customers container fix-top">
    <h1 class="page-header">用户管理系统</h1>
    <Alert v-if="alert" :message="alert"></Alert>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="请输入搜索关键字" v-model="keywords">
      <span class="input-group-addon"><button class="btn btn-info" @click="search(keywords)">搜索</button></span>
    </div>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <th>{{customer.name}}</th>
          <th>{{customer.phone}}</th>
          <th>{{customer.email}}</th>
          <th><router-link class="btn btn-primary" :to="'/customer/'+customer.id">详情</router-link></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:this.$route.query.alert,
      keywords:""
    }
  },
  methods:{
    fetchCustomers(){
      axios.get("http://localhost:3000/users")
      .then((response)=>{
        //console.log(response);
        this.customers=response.data;
      })
    },
    search(keywords){
      axios.get("http://localhost:3000/users/?q="+this.keywords)
      .then((response)=>{
        //console.log(response.data);
        this.customers=response.data;
      }) 
    }
  },
  created(){
    this.fetchCustomers();
  },
  components:{
    Alert,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-group-addon{ 
  padding: 0;
  border: 0;
}
</style>
