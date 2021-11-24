<template>
  <div>
    <h1>successfully logged in</h1>
    <hr>
    <h2>{{msg}}</h2>
    <p 
      class="logout" 
      v-on:click="logout()"
    >logout</p>
  </div>
</template>

<script>
import authService from '../modules/authService';

export default {
  name:'home',
  data(){
    return {
      msg:'null'
    }
  },
  async created(){
    try{
      const response = await authService.home();
      this.msg = response.data.posts.title;
    }catch(e){
      console.log(e)
    }
  },
  methods:{
    async logout(){
      try{
        console.log('vue')
        await authService.logout();
        this.$store.dispatch('updateIdToken',null)
        this.$store.dispatch('updateEmail',null)
        this.$emit('logout');
      }catch(err){  
        console.log(err)
      }
    }
  }
}
</script>

<style>
.logout {
  width:100px;
  margin:auto;
  background-color:skyblue;
  border-radius:5px;
  padding:2px 3px;
}
</style>