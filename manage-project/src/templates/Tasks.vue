<template>
<div class="main">
  <!-- /.row -->
  <div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          任务列表
        </div>
        <div class="row">
          <router-link to="/tasks/create"><button type="button" class="btn btn-primary">创建任务</button></router-link>
        </div>
        <!-- /.panel-heading -->
        <div class="panel-body">
          <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
            <thead>
              <tr>
                <th>序号</th>
                <th>任务名称</th>
                <th>任务目标</th>
                <th>状态</th>
                <th>进度</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd gradeX" v-for="(task, index) in tasks">
                <th>{{index + 1}}</th>
                <th><router-link :to="{ name: 'TaskReport', params: {task_id:task.id} }">{{ task.name.substring(0, 20) }}</router-link></th>
                <th>{{ task.asset_list }}</th>
                <th>{{ task.status_display }}</th>
                <th>{{ task.progress }}</th>
                <th>{{ task.start_time }}</th>
                <th>{{ task.end_time }}</th>
                <th><a v-on:click="restartTask(task.id)"><p class="fa fa-repeat"> 重新运行 </p></a></th>
              </tr>
            </tbody>
          </table>
          <!-- /.table-responsive -->
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
      items: [],
      tasks: [],
    }
  },
  methods: {
    getTasksList() {
      var self = this;
      this.$http({
          method: 'get',
          url: HOST + '/api/tasks/',
          headers: {
            'Authorization': 'JWT ' + this.getCookie('token')
          }
        }).then(function(response) {
          console.log(response.data.data);
          self.tasks = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    restartTask(task_id){
      console.log('重启:' + task_id)
      var self = this;
      this.$http({
          method: 'post',
          url: HOST + '/api/tasks/' + task_id + '/restart/',
          headers: {
            'Authorization': 'JWT ' + this.getCookie('token')
          }
        }).then(function(response) {
          console.log(response.data);
          if(response.data.code == 0){
            alert('success');
          }else{
            alert(response.data.detail)
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return 'this is first one'.split('').reverse().join('')
    }
  },
  created: function() {
    this.getTasksList();
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

/* .main>div {
  width: 80%;
  height: 400px;
  line-height: 400px;
  background-color: #f2f2f2;
  margin-left: 10%;
} */
</style>
