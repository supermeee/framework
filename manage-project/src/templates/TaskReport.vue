<template>
  <div class="main">
    <div class="col-lg-6">
                    <div class="panel panel-default" v-for="(report, index) in reports">
                        <div class="panel-heading">
                            report: {{report.id}}, target: {{report.target}}, progress: {{report.progress}}
                            status: {{report.status_display}} error:{{report.error_msg}}
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>result id</th>
                                            <th>url</th>
                                            <th>漏洞名称</th>
                                            <th>解决方案</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-bind:class="getcolor" v-for="(result, index) in report.taskresults">
                                            <td>{{index+1}}</td>
                                            <td>{{result.id}}</td>
                                            <td>{{result.url.substring(0, 40)}}</td>
                                            <td>{{result.vuln.i18n_name[1]}}</td>
                                            <td>{{result.vuln.solutions[0].i18n_solution[1]}}</td>
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
        reports: [],
        task_id: ''
    }
  },
  methods: {
    getReports(){
      var self = this;
      self.subtask_id = this.$route.params.subtask_id;
      this.$http({
          method: 'get',
          url: HOST + '/api/subtasks/' + self.subtask_id + '/reports/',
          headers: {
            'Authorization': 'JWT ' + this.getCookie('token')
          }
        }).then(function(response) {
          console.log(response.data.data);
          self.reports = response.data.data;
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
    this.getReports()
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
