<template>
  <div>
    <p>token : {{token}}</p>
    <p>email : {{email}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    token(){
      let token = this.$store.getters.idToken;
      if(token){
        return `${token.slice(0,10)}...`;
      }
      return 'null'
    },
    email(){
      let email = this.$store.getters.email;
      if(email){
        return email
      }
      return 'null'
    },
  }
}
</script>