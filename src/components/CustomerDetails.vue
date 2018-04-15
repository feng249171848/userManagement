<template>
  <div class="details container fix-top">
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-phone">：{{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope">：{{customer.email}}</span></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-book">：{{customer.education}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-flag">：{{customer.profession}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">：{{customer.profile}}</span></li>
    </ul>
  </div> 
</template>

<script>
import axios from 'axios'
export default {
  name: 'customer-details',
  data () {
    return {
      customer:{}
    }
  },
  methods:{
    fetchCustomers(id){
      axios.get("http://localhost:3000/users/"+id)
      .then((response)=>{
        //console.log(response.data);
        this.customer=response.data;
      })
    },
    deleteCustomer(id){
      var r=confirm('确定删除用户：'+this.customer.name);
      if(r){
        axios.delete("http://localhost:3000/users/"+id)
        .then((response)=>{
          this.$router.push({path: '/',query:{alert:"用户"+this.customer.name+"删除成功！"}});
        })
      } 
    }
  },
  created(){
    this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pull-right a{
  margin-right: 40px;;
}
</style>
