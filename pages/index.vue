<template lang="pug">
  <mainPage/>
</template>

<script>
import Vue from 'vue'
import mainPage from "@/components/mainPage";

export default Vue.extend({
  name: 'IndexPage',
  components: {
    mainPage
  },
})
</script>