<template>
<div class="box1">



    <el-col :span="20" class="box">

        <el-col :span="8"  class="item">

            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="邮箱" >
                    <el-input v-model="email"></el-input>
                </el-form-item>



                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm'),login()">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>

        </el-col>


    </el-col>

</div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('邮箱不能为空'));
            }

        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            email:'',
            loginMessage:'',
            ruleForm: {
                pass: '',
                checkPass: '',
                age: '',

            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // 登录逻辑
        login(){
            axios({
                url:'http://localhost:3000/login',
                params:{
                    email:this.email,
                    password:this.ruleForm.pass
                }
            }).then(res=>{
                console.log(res);
                //登录成功逻辑
               if(res.data.status=='ok'){
                   //定义一个函数
                   let local=(value)=>{
                       localStorage.setItem("lastname", "Smith");
                       localStorage.setItem('user', value);
                       this.loginMessage= localStorage.getItem('user');

                   }

                   local(res.data.url)
                   this.$store.commit('change',localStorage.getItem('user'))

                   this.$store.commit('c')
                   setTimeout(()=>{
                       this.$router.push('/detail')
                   },50)
               }



            })

        },

    },

  created() {
        if(localStorage.getItem('lastname')){
            this.$store.commit('change',localStorage.getItem('user'))
        }

    }
}
</script>

<style scoped>

.box{
    height: 550px;
    float: right;
}
.item{
    margin-top:150px;
    margin-left: 380px;
}
</style>