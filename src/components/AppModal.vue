<template>
  <v-row justify="center">
    <v-dialog v-model="model" transition="slide-y-reverse-transition" width="40%">
      <v-card>
        <v-container>
          <v-btn
            color="grey lighten-3 "
            elevation="0"
            width="30"
            height="30"
            absolute
            right
            fab
            @click="model = false"
          >
            <v-icon small>mdi-close</v-icon>
          </v-btn>
          <section class="mt-6 text-center">
            <slot></slot>
          </section>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    name: 'Comment',
    props: {
      value: Boolean
    },
    computed: {
      model: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }  
    }    
  }
</script>
