<template>
  <div class="main">
    <div class="col-lg-6">
                    <div class="panel panel-default" v-for="result in results">
                        <div class="panel-heading">
                            result: {{result.id}}, target: {{result.target}} {{result.create_datetime}}
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>url</th>
                                            <th>漏洞名称</th>
                                            <th>description</th>
                                            <th>severity_points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-bind:class="getcolor" v-for="(vul, index) in result.vuln_list">
                                            <td>{{index+1}}</td>
                                            <td>{{vul.url}}</td>
                                            <td>{{vul.vuln.i18n_name[1]}}</td>
                                            <td>{{vul.vuln.i18n_description[1].substring(0, 50)}}</td>
                                            <td>{{vul.vuln.severity_points}}</td>
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
        results: [],
        task_id: ''
    }
  },
  methods: {
    getReports(){
      var self = this;
      self.report_id = this.$route.params.report_id;
      this.$http({
          method: 'get',
          url: HOST + '/api/taskreports/' + self.report_id + '/results/',
          headers: {
            'Authorization': 'JWT ' + this.getCookie('token')
          }
        }).then(function(response) {
          console.log(response.data.data);
          self.results = response.data.data;
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
