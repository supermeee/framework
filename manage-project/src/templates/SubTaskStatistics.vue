<template>
  <div class="main">
    <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Pie Chart Example
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <div class="flot-chart-content" id="pie-container" style="padding: 0px; position: relative;">
                                </div>
                              </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
      </div>
  </div>
</template>

<script>
import '../vendor/echarts.js'

export default {
  data () {
    return {
        datas: {},
        task_id: ''
    }
  },
  methods: {
    getSubTaskSstatistics(){
      var self = this;
      self.subtask_id = this.$route.params.subtask_id;
      self.task_id = this.$route.params.task_id;
      this.$http({
          method: 'get',
          url: HOST + '/api/tasks/' + self.task_id + '/subtasks/' + self.subtask_id + '/statistics/',
          headers: {
            'Authorization': 'JWT ' + this.getCookie('token')
          }
        }).then(function(response) {
          console.log(response.data.data);
          self.datas  = response.data.data;
          self.pie(self.datas.vuln_threat_distribution)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    pie(data){
        console.log('创建饼图');
        var dom = document.getElementById("pie-container");
        var myChart = this.$echarts.init(dom);
        var keys = Object.keys(data);
        var seriesData = [];
        for (var key in data){
            //key will be -> 'id'
            //dictionary[key] -> 'value'
            seriesData.push({
              name:key,
              value:data[key],
            })
        }
        console.log(keys);
        console.log(seriesData);
        var option = {
            title : {
                text: '漏洞分布',
                subtext: 'subtask_id:' + self.subtask_id,
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: keys,
            },
            series : [
                {
                    name: '漏洞分布',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option, true);
    }
  },
  created: function() {
    this.getSubTaskSstatistics()
  }
}
</script>

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
