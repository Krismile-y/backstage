<template>
  <div id="app">

      <top></top>
      <navbar></navbar>


          <side></side>
          <mainContent></mainContent>


      <keep-alive>
        <router-view/>
      </keep-alive>

  </div>
</template>

<script>
import top from "@/components/top";
import navbar from "@/components/navbar";
import side from "@/components/side";
import mainContent from "@/components/mainContent";
export default {
    components:{
         top,
        navbar,
        side,
        mainContent
    }
}
</script>
<style lang="scss">

</style>
