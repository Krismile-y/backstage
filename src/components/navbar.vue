<template>
<div class="box">


    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" >消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

<!--    ------------------------------------------------>
    <div class="drop">
        <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    登录<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a" class="el-icon-edit">黄金糕</el-dropdown-item>

            </el-dropdown-menu>
        </el-dropdown>
    </div>
<!--    ------------------------------------------------->
    <div class="avatar">
        <div class="block"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
    </div>

</div>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleCommand(command) {
            this.$message('click on item ' + command);
        }
    }
}
</script>

<style scoped>
.box{
    position: relative;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.drop{
    position: absolute;
    right: 20px;
    top: 20px;
}
.avatar{
    position: absolute;
    right: 80px;
    top: 10px;
}

</style>