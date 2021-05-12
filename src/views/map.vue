<template>
  <div id="china-map" _echarts_instance_="ec_1620834178378" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"><div style="position: relative; overflow: hidden; width: 1000px; height: 1000px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas data-zr-dom-id="zr_0" width="1000" height="1000" style="position: absolute; left: 0px; top: 0px; width: 1000px; height: 1000px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(50, 50, 50, 0.7); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 5px; left: 779px; top: 468px; pointer-events: none;">浙江<br>0 (p / km2)</div></div>

</template>

<script>
require('../assets/js/china.js')
export default {
  name: 'Map',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  mounted () {
    this.initEcharts()
  },
  methods: {
    initEcharts () {
      var myChart = this.$echarts.init(document.getElementById('china-map'));
      var seriesData = [
        {
          name: '北京',
          value: 100
        }, {
          name: '天津',
          value: 0
        }, {
          name: '上海',
          value: 60
        }, {
          name: '重庆',
          value: 0
        }, {
          name: '河北',
          value: 60
        }, {
          name: '河南',
          value: 60
        }, {
          name: '云南',
          value: 0
        }, {
          name: '辽宁',
          value: 0
        }, {
          name: '黑龙江',
          value: 0
        }, {
          name: '湖南',
          value: 60
        }, {
          name: '安徽',
          value: 0
        }, {
          name: '山东',
          value: 60
        }, {
          name: '新疆',
          value: 0
        }, {
          name: '江苏',
          value: 0
        }, {
          name: '浙江',
          value: 0
        }, {
          name: '江西',
          value: 0
        }, {
          name: '湖北',
          value: 60
        }, {
          name: '广西',
          value: 60
        }, {
          name: '甘肃',
          value: 0
        }, {
          name: '山西',
          value: 60
        }, {
          name: '内蒙古',
          value: 0
        }, {
          name: '陕西',
          value: 0
        }, {
          name: '吉林',
          value: 0
        }, {
          name: '福建',
          value: 0
        }, {
          name: '贵州',
          value: 0
        }, {
          name: '广东',
          value: 597
        }, {
          name: '青海',
          value: 0
        }, {
          name: '西藏',
          value: 0
        }, {
          name: '四川',
          value: 60
        }, {
          name: '宁夏',
          value: 0
        }, {
          name: '海南',
          value: 60
        }, {
          name: '台湾',
          value: 0
        }, {
          name: '香港',
          value: 0
        }, {
          name: '澳门',
          value: 0
        }];

      var option = {
        title: {
          text: 'china',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)'
        },
        series: [
          {
            name: 'china',
            type: 'map',
            mapType: 'china',
            roam: false,//是否开启鼠标缩放和平移漫游
            data: seriesData,
            top: "10%",//组件距离容器的距离
            zoom:1.1,
            selectedMode : 'single',

            label: {
              normal: {
                show: true,//显示省份标签
                textStyle:{color:"#fbfdfe"}//省份标签字体颜色
              },
              emphasis: {//对应的鼠标悬浮效果
                show: true,
                textStyle:{color:"#323232"}
              }
            },
            itemStyle: {
              normal: {
                borderWidth: .5,//区域边框宽度
                borderColor: '#0550c3',//区域边框颜色
                areaColor:"#4ea397",//区域颜色

              },

              emphasis: {
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor:"#ece39e",
              }
            },
          }
        ]

      };

      myChart.setOption(option);
    }
  }
}
</script>

<style lang="scss" scoped>
#china-map {
  margin: auto;
  width: 1400px;
  height: 1000px;
}
</style>
