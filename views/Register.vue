<template>
  <div>
    <div class="user"><i class="icon-u"></i><input type="text" id="user" placeholder="Account" /></div>
    <div class="password"><i class="icon-p"></i><input type="password" id="password" placeholder="password"/></div>
    <div class="email"><i class="icon-e"></i><input type="email" id="email" placeholder="email"/></div>
    <button class="register">Sign Up</button>
    <div class="more">
      <router-link to="/" class="login">Registered?Here to sign in</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      
    }
  },
  methods: {
    changePage() {
      this.$router.push({

      })
    }
  }
};
</script>

<style scoped>
.user,
.password,
.email {
  height: 60px;
  width: 440px;
  border-radius: 30px;
  opacity: 0.25;
  margin: 0 auto 24px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
}

#user,
#password,
#email {
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
  margin-top: 28px;
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

.email {
  position: relative;
}

.icon-e::before {
  font-family: 'icomoon';
   content: '\ea86';
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

.register {
  height: 60px;
  width: 440px;
  border-radius: 30px;
  margin-bottom: 30px;
  font-size: 16px;
  background-color: rgba(58, 98, 215, 1);
  color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(58, 98, 215, 1);
}

.more {
  font-size: 18px;
  text-align: right;
}

.login {
  color: rgba(211, 211, 211, 1);
  cursor: pointer;
}


</style>