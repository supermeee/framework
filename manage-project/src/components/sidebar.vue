<template>
  <div class="sidebar">
    <el-collapse v-model="activeName" accordion>

      <el-collapse-item name="1">
        <template slot="title">
          &nbsp;&nbsp;&nbsp;<i class="el-icon-menu"></i>&nbsp;&nbsp;下拉菜单一
        </template>
        <router-link to="/home"><i class="icon-note"></i>Home menuButton</router-link>
        <router-link to="/tasks"><i class="icon-note"></i>任务列表</router-link>
        <router-link to="/tasks/create"><i class="icon-note"></i>创建任务</router-link>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          &nbsp;&nbsp;&nbsp;<i class="el-icon-picture"></i>&nbsp;&nbsp;下拉菜单二
        </template>
        <router-link to="/page01"><i class="icon-note"></i>Page01 menuButton</router-link>
        <router-link to="/page02"><i class="icon-note"></i>Page02 menuButton</router-link>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          &nbsp;&nbsp;&nbsp;<i class="el-icon-location"></i>&nbsp;&nbsp;下拉菜单三
        </template>
        <router-link to="/page01"><i class="icon-note"></i>Page01 menuButton</router-link>
        <router-link to="/page02"><i class="icon-note"></i>Page02 menuButton</router-link>
      </el-collapse-item>
      <router-link to="/page03" @click.native="toogleMenu($event)">&nbsp;&nbsp;&nbsp;<i class="el-icon-setting"></i>&nbsp;&nbsp;其它选项</router-link>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       activeName: ['1']  //展开第几个菜单,可展开多个
    }
  },
  methods: {
    toogleMenu (e) {
      console.log(e.target);
      e.target.className = "active-menu";
      this.activeName = [];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#aaa{
  padding-bottom: 0 !important;
}
.sidebar{
  position: absolute;
  top: 51px;
  left: 0;
  bottom: 0;
  width: 240px;
  background-color: #f9f9f9;
  color: #333;
  border-right: 1px solid #e6e6e6;
}
.el-collapse{
  border-top: none !important;
}
.el-collapse-item__header,.is-active{
  /*background-color: #fff !important;*/
}
.el-collapse-item__content>a:first-child{
  border-top: 1px solid #e6e6e6;
}
.el-collapse-item__content>a,.el-collapse>a{
  text-decoration: none;
  color: #666;
  display: block;
  height: 48px;
  line-height: 48px;
  text-indent: 30px;
  background-color: #f9f9f9;
}
.el-collapse>a{
  font-size: 13px;
  text-indent: 0;
  color:#333;
}
.router-link-exact-active,.router-link-active{
  background-color: #f1f1f1 !important;
  color: #337ab7 !important;
}
</style>
