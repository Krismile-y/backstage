<template>
  <div id="app">

          <top></top>
          <navbar></navbar>

      <keep-alive exclude="Home">
        <router-view/>
      </keep-alive>

    <div style="width: 100%;height: 1px;background: #cccccc"  ></div>

  </div>
</template>

<script>

import top from "@/components/home/top";
import navbar from "@/components/home/navbar";
export default {
    components:{
        navbar,top
    },
    methods:{

    }
}
</script>
<style lang="scss">

</style>
