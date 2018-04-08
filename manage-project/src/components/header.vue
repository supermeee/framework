<template>
  <div class="header">
    <span>admin 管理平台</span>
    <div class="select-wrapper">
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          其他操作<i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">黄金糕</el-dropdown-item>
          <el-dropdown-item command="2">狮子头</el-dropdown-item>
          <el-dropdown-item command="3">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="4">双皮奶</el-dropdown-item>
          <el-dropdown-item command="5">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          admin<i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="7">用户信息</el-dropdown-item>
          <el-dropdown-item command="8">注销账户</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleCommand(command) {
      console.log("点击了"+command);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  background-color: #f9f9f9;
  color: #666;
  padding: 0 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #e6e6e6;
}
.select-wrapper{
  position: absolute;
  right: 20px;
  top: 0;
  height: 50px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #666;
  outline: none;
  font-weight: normal;
  margin-left: 20px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
