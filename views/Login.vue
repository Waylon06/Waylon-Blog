<template>
  <div>
    <div class="user"><i class="icon-u"></i><input type="text" id="user" placeholder="Account" /></div>
    <div class="password">
      <i class="icon-p"></i>
      <input type="password" placeholder="Password" id="password" />
    </div>
    <button class="login">Login</button>
    <div class="remember">
      <el-switch
        v-model="value"
        active-color="rgba(58, 98, 215, 1)"
        inactive-color="rgba(255, 255, 255, 0.25)"
      >
      </el-switch
      ><span class="active-text">Remember the password</span>
    </div>
    <div class="more">
      <a class="register">Create Account</a>
      <a class="forget">Forget Password?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style scoped>
.user,
.password {
  height: 60px;
  width: 440px;
  border-radius: 30px;
  opacity: 0.25;
  margin: 20px auto;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
}

#user,
#password {
  width: 370px;
  height: 60px;
  opacity: 0.25;
  margin-left: 70px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border: none;
  outline: none;
}

.user {
  margin-top: 80px;
  position: relative;
}

.icon-u::before {
  font-family: 'icomoon';
   content: '\e971';
  position: absolute;
  top: 18px;
  left: 35px;
  font-size: 20px;
}

.password {
  margin-bottom: 40px;
  position: relative;
}

.icon-p::before {
font-family: 'icomoon';
   content: '\e98f';
  position: absolute;
  top: 18px;
  left: 35px;
  font-size: 20px;
}

input::-webkit-input-placeholder {
  /* color: rgba(211, 211, 211, 1); */
  font-size: 16px;
  font-family: SourceHanSansSC-regular;
  opacity: 1;
}

.remember {
  text-align: right;
}

.login {
  height: 60px;
  width: 440px;
  border-radius: 30px;
  margin-bottom: 30px;
  font-size: 16px;
  background-color: rgba(58, 98, 215, 1);
  color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(58, 98, 215, 1);
}

.active-text {
  margin-left: 20px;
  color: rgba(211, 211, 211, 1);
  font-size: 16px;
}

.more {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: rgba(211, 211, 211, 1);
  cursor: pointer;
}

.more .register {
  display: block;
  text-align: left;
}

.more .forget {
  display: block;
  text-align: right;
}
</style>