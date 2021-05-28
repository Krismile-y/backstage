<template>
<div>


    <div class="box">
        <side></side>
        <login ></login>
    </div>


</div>
</template>

<script>
import navbar from "@/components/home/navbar";
import side from "@/components/home/side";
import top from "@/components/home/top";
import login from "@/components/home/login";

export default {
  name: 'Home',
  components: {
  top,navbar,side,login
  },

    methods:{

    },
    created() {
        this.$store.commit('des','')
    }
}
</script>

<style scoped>
.box{

}

</style>
