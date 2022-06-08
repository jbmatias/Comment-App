<template>
  <v-main class="grey lighten-3" style="margin: 0;">
    <v-row justify="center" style="height: 635px; overflow-y: auto;">    
      <v-col
        cols="6"        
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
          class="px-2 py-2"
        >
          <slot></slot>
        </v-sheet>
      </v-col>
      
    </v-row>
  </v-main>
</template>

<style lang="scss">
  .v-main {
    //padding: 50px !important;
  }
</style>