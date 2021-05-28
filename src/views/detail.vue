<template>
<div>




            <detailSide></detailSide>

            <detailForm></detailForm>


</div>
</template>

<script>
import detailSide from "@/components/detail/detailSide";

import detailForm from "@/components/detail/detailForm";
export default {
    name: "detail",
    components: {
        detailSide,detailForm
    },

    created() {
     if(localStorage.getItem('lastname')){

     }else if(!localStorage.getItem('lastname')){
         this.$router.push('/home')
     }

    }
}
</script>

<style scoped>


</style>