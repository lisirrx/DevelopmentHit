<template>
<v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
  <iframe :src="path" frameborder="0"></iframe>
</v-container>
</template>



<script>
export default {

  computed:{
      path(){
          return this.$store.state.path;
      }
  }
}
</script>

