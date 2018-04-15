<template>
  <div class="update container fix-top">
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">编辑用户</h1>
    <form @submit="updateCustomer">
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
        <button class="btn btn-primary" type="submit">确定</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'customers-update',
  data () {
    return {
      customer:{},
      editId:this.$route.params.id
    }
  },
  methods:{
    updateCustomer(e){
      e.preventDefault();
      if(!this.customer.name || !this.customer.phone || !this.customer.email){
        console.log("请添加对应的信息")
      }else{
        axios.put("http://localhost:3000/users/"+this.editId,this.customer)
        .then((response)=>{
          this.$router.push({path: '/',query:{alert:"用户"+this.customer.name+"信息更新成功！"}});
        })
      }
      
    }
  },
  created(){
    axios.get("http://localhost:3000/users/"+this.editId)
    .then((response)=>{
      this.customer=response.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
