<template>
  <v-container>
    <v-card flat class="d-flex justify-space-between">
      <v-avatar
        color="grey darken-1 mx-2 my-2"
        size="76"
      >
        <v-icon x-large>mdi-account</v-icon>
      </v-avatar>
      <v-card-text class="post mx-2 my-2">
        <h3>{{username}}</h3>
        <div class="comment">
          {{comment}}
        </div>
        <v-card flat block class="d-flex justify-end transparent" v-if="responseLength < 3 && enableResponding">
          <v-btn @click="$emit('show-modal', { show: true, id: id })">Reply</v-btn>
        </v-card>
      </v-card-text>           
    </v-card>    
    <!-- Dynamic response to a comment -->
    <v-row justify="end">
      <v-col cols="10">
        <respond           
          v-for="(response, i) in responses"
          :id="response.id"          
          :username="response.name"
          :comment="response.comment"
          :key="i"></respond>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
  .post {
    background: #fdfbfb;
  }
</style>
<script>
  import Respond from './Repond.vue'
  export default {
    name: 'Comment',  
    components: {
      Respond
    },
    props: {      
      enableResponding: {
        type: Boolean,
        default: true
      },
      responses: Array,
      username: String,
      comment: String,
      responseLength: {
        type: Number,
        default: 0
      },
      id: {
        type: Number,
        default: null
      }      
    }    
  }
</script>