<template>
<div class="main">
  <p>这里是Home页面</p>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    // setCookie(c_name, value, expiredays) {
    //   var exdate = new Date();
    //   expiredays = expiredays == undefined ? 1 : expiredays
    //   exdate.setDate(exdate.getDate() + expiredays);
    //   document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    // },
    login() {
      this.$http({
        method: 'post',
        url: HOST + '/api/jwt-auth/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: USERNAME,
          password: PASSWORD,
        }
      }).then(function(response) {
        console.log(response.data);
        // this.setCookie('token', response.data.data.token);
        var exdate = new Date();
        var expiredays = 1 ;
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = 'token' + "=" + escape(response.data.data.token) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
      })
    },
  },
  created: function() {
    this.login();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  padding-top: 80px;
}

.main>p {
  width: 80%;
  height: 400px;
  line-height: 400px;
  background-color: #f2f2f2;
  margin-left: 10%;
}
</style>
