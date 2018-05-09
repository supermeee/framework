<template>
  <div class="main">
    <div class="col-lg-6">
                    <div class="panel panel-default" v-for="(subtask, index) in subtasks">
                        <div class="panel-heading">
                          <router-link :to="{ name: 'SubTaskStatistics', params: {subtask_id:subtask.id, task_id:task_id} }"><button type="button" class="btn btn-info">统计图表</button></router-link>
                          subtask: {{subtask.id}}, progress:{{subtask.progress}}
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>report id</th>
                                            <th>进度</th>
                                            <th>operations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-bind:class="getcolor" v-for="(report, index) in subtask.taskreports">
                                            <td>{{index+1}}</td>
                                            <td>{{report.id}}</td>
                                            <td>{{report.progress}}</td>
                                            <td><router-link :to="{ name: 'TaskReport', params: {subtask_id:subtask.id} }">显示详情</router-link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        subtasks: [],
        task_id: ''
    }
  },
  methods: {
    getSubTasks(){
      var self = this;
      self.task_id = this.$route.params.task_id;
      this.$http({
          method: 'get',
          url: HOST + '/api/tasks/' + self.task_id + '/subtasks/',
          headers: {
            'Authorization': 'JWT ' + this.getCookie('token')
          }
        }).then(function(response) {
          console.log(response.data.data);
          self.subtasks  = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed:{
    getcolor(index){
      var color_cls = ["success", "info", "warning", "danger"];
      return color_cls[Math.random()*10%4]
    },
  },
  created: function() {
    this.getSubTasks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    width: 100%;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 80px;
  }
  .main>p{
    width: 80%;
    height: 400px;
    line-height: 400px;
    background-color: #f2f2f2;
    margin-left: 10%;
  }
</style>
