<template>
  <v-form ref="form">
    <v-text-field 
      label="User name"
      outline
      :rules="rules" 
      v-model="model.name">
    </v-text-field>
    <v-textarea
        solo       
        :rules="rules" 
        :label="label"
        v-model="model.comment"
      ></v-textarea>
      <v-btn @click="comment">Comment</v-btn>
  </v-form>
</template>
<script>
  export default {
    name: 'CommentForm',
    props: {
      label: String,
      show: Boolean       
    },
    watch: {
      show: {
        handler(val) {
          if(!val) {
            this.model.comment = ''
          }
        },
        immediate: true
      }
    },
    data: () => ({
      model: {
        name: '',
        comment: '',
      },
      rules: [
        value => !!value || 'Required.',
      ]
    }),
    methods: {
      comment() {
        if(this.$refs.form.validate()) {          
          this.$emit('comment', this.model)
        } else {
          alert('Please provide name and comment!')
        }
      }
    }
  }
</script>