<template>
<div class="main">
  <div class="col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        创建任务
      </div>

      <div class="panel-body">
        <div class="row">
          <div class="col-lg-6">
            <form role="form">
              <div class="form-group">
                <label>任务名称</label>
                <input class="form-control" id='task-name' v-model="name">
                <p class="help-block">输入任务名称</p>
              </div>

              <div class="form-group">
                <label>任务目标</label>
                <textarea class="form-control" rows="3" id='task-target' v-model="targets"></textarea>
              </div>

              <div class="form-group">
                  <label>任务类型</label>
                  <select class="form-control" v-model='task_type'>
                      <option value="0">系统扫描</option>
                      <option value="1">web应用扫描</option>
                      <option value="2">漏洞扫描</option>
                      <option value="3">配置核查</option>
                      <option value="4">口令猜测</option>
                      <option value="5">离线扫描</option>
                  </select>
              </div>

              <div class="form-group">
                  <label>模板id</label>
                  <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
              </div>

              <button class="btn btn-default btn-danger" v-on:click="createTask">提交</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      targets  : '',
      task_type  : 1,
    }
  },
  methods:{
    createTask(){
      console.log('click!!');
      var self = this;
      // 获取数据
      this.$http({
        method: 'post',
        url: HOST + '/api/tasks/',
        headers: {
          'Authorization': 'JWT ' + this.getCookie('token'),
        },
        data: {
          name: self.name,
          targets: self.targets,
          task_type: self.task_type,
        }
      }).then(function(response) {
        console.log(response.data)
        if(response.data.code==0){
          alert('成功')
        }
      })
    },
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
