<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        const validateName = (rule, value, callback) => {
            let reg = /(^[a-zA-Z0-9]{4,10}$)/;
            if (value === '') {
                callback(new Error("请输入用户名"));
            } else if (!reg.test(value)) {
                callback(new Error("长度在4-10位字符之间"));
            } else {
                callback();
            }
        };
        const validatePass = (rule, value, callback) => {
            // 6-12位包含大小写字母、数字、特殊符号
            let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
            if (value === '') {
                callback(new Error("请输入密码"));
            } else if (!reg.test(value)) {
                callback(new Error("6-12位密码需要包含大小写字母、数字、特殊符号"));
            } else {
                callback();
            }
        };
        return {
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    {validator: validateName, trigger: 'blur'},
                    {required: true}
                ],
                password: [
                    {validator: validatePass, trigger: 'blur'},
                    {required: true}
                ],
            }
        }
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                console.log(this.form);
            })
        }
    }
}
</script>

<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409Eff;
    .box-card {
        width: 450px;
        margin: 200px auto;
        .el-card__header {
            font-size: 34px;
        }
        .el-button {
            width: 100%;
        }
    }
}
</style>