<template>
  <v-card flat class="d-flex justify-space-between">
    <v-avatar
      color="grey darken-1 mx-2 my-2"
      size="76"
    >
      <v-icon x-large>mdi-account</v-icon>
    </v-avatar>
    <v-card-text class="post mx-2 my-2">
      <h3>{{username}}</h3>
      <div class="response">
        {{comment}}
      </div>      
    </v-card-text>           
  </v-card> 
</template>
<script>  
  export default {
    name: 'Respond', 
    props: {
      username: String,
      comment: String,
    }       
  }
</script>